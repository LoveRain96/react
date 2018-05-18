import React from 'react';
import {Collapse,Card, CardBody, Form, Label, Input} from  'reactstrap'
import {addInternship} from "./action";
import { Button} from "antd";
import {connect} from 'react-redux'

const mapDispatchToProps = function (dispatch) {
    return {
        addInternship : function (company_id,lecturer_code, deadline, course_id) {
            dispatch(addInternship(company_id,lecturer_code, deadline, course_id))
        }
    }
};

const mapStateToProps    = function (state) {
    return {
        internship : state,
    }
};

class FormAddInternship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course_id : null,
            company_id : null,
            lecturer_code : null,
            deadline : null,
            toggle: false,
        }
    }
    handleClick(e) {
        e.preventDefault();
        this.props.addInternship(this.state.course_id, this.state.company_id, this.state.lecturer_code, this.state.deadline)
    }
    endDateChange(event) {
        this.setState({deadline : event.target.value})
    }
    render() {
        return(
            <Collapse isOpen={this.props.collapse}>
                <Card>
                    <CardBody>
                        <Form onSubmit={this.handleClick.bind(this)}>
                            <Label>Company</Label>
                            <select>
                                <option></option>
                            </select>
                            <Label>Lecturer manager</Label>
                            <select>
                                <option></option>
                            </select>
                            <Label>Deadline</Label>
                            <Input onChange={this.endDateChange.bind(this)} name="deadline" type={"date"}/>
                            <br/>
                            <Button onClick={this.handleClick.bind(this)}>SAVE</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Collapse>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormAddInternship)