import React from 'react';
import {Collapse,Card, CardBody, Form, Label, Input} from  'reactstrap'
import {addCourse} from "./actions";
import { Button} from "antd";
import {connect} from 'react-redux'

const mapDispatchToProps = function (dispatch) {
    return {
        addCourse : function (name, startDate, endDate ) {
            dispatch(addCourse(name, startDate, endDate))
        }
    }
};

const mapStateToProps    = function (state) {
    return {
        courses: state.duclai,
    }
};

class FormAddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            toggle: false,
        }
    }
    handleClick(e) {
        e.preventDefault();
        this.props.addCourse(this.state.name, this.state.startDate, this.state.endDate)
    }

    nameChange(event) {
        this.setState({name: event.target.value})
    }

    startDateChange(event) {
        this.setState({startDate: event.target.value})
    }

    endDateChange(event) {
        this.setState({endDate: event.target.value})
    }
    render() {
        return(
            <Collapse isOpen={this.props.collapse}>
                <Card>
                    <CardBody>
                        <Form onSubmit={this.handleClick.bind(this)}>
                            <Label>Name</Label>
                            <Input name="name" type="text" onChange={this.nameChange.bind(this)}
                                   placeholder="Enter name course"/>
                            <Label>Start_Date</Label>
                            <Input onChange={this.startDateChange.bind(this)} name="startDate" type="date"/>
                            <Label>End_Date</Label>
                            <Input onChange={this.endDateChange.bind(this)} name="endDate" type={"date"}/>
                            <br/>
                            <Button onClick={this.handleClick.bind(this)}>SAVE</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Collapse>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormAddCourse)