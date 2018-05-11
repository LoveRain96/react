import React from 'react';
import {Collapse,Card, CardBody, Form, Label, Input} from  'reactstrap'
import { Button} from "antd";
import {connect} from 'react-redux'

const mapDispatchToProps = function (dispatch) {
    return {

    }
};

const mapStateToProps   = function (state) {
    return {
        companies : state
    }
};

class FormAddCompany extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneManager :'',
            emailManager : '',
            nameManager  : '',
            address      : ''
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.props.addCourse(this.state.name, this.state.startDate, this.state.endDate)
    }

    nameChange(event) {
        this.setState({name: event.target.value})
    }

    phoneManagerChange(event) {
        this.setState({phoneManager: event.target.value})
    }

    nameManagerChange(event) {
        this.setState({nameManager: event.target.value})
    }

    emailManagerChange(event) {
        this.setState({emailManager: event.target.value})
    }

    addressChange(event) {
        this.setState({address: event.target.value})
    }

    render() {
        return (
            <Collapse isOpen={this.props.collapse}>
                <Card>
                    <CardBody>
                        <Form onSubmit={this.handleClick.bind(this)}>
                            <Label>Name</Label>
                            <Input name="name" type="text" onChange={this.nameChange.bind(this)}
                                   placeholder="Enter name company"/>
                            <Label>Phone Manager</Label>
                            <Input onChange={this.phoneManagerChange.bind(this)} name="phoneManager" />
                            <Label>Email Manager</Label>
                            <Input onChange={this.emailManagerChange.bind(this)} name="emailManager" />
                            <Label>Name Manager</Label>
                            <Input onChange={this.nameManagerChange.bind(this)} name="nameManager" />
                            <Label>Address</Label>
                            <Input onChange={this.addressChange.bind(this)} name="address"/>
                            <br/>
                            <Button onClick={this.handleClick.bind(this)}>SAVE</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Collapse>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormAddCompany)