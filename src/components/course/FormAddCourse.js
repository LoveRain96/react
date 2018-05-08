import React from 'react';
import {Collapse, Button ,Card, CardBody, Form, Label, Input} from  'reactstrap'
import {addCourse} from "./actions";
import store from "./store";
import axios from "axios/index";

export default class FormAddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            name: '',
            startDate: '',
            endDate: '',
            toggle: false,
        }
    }
    handleClick(e) {
        e.preventDefault();
        axios.post('/course',{
            name: this.state.name,
            startDate : this.state.startDate,
            endDate  : this.state.endDate
        }).then(res=> {
            store.dispatch(addCourse(res.data));
        })

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
                            <Button>SAVE</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Collapse>
        )
    }
}