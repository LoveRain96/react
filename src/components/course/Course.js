import React from  'react';
import store from "./store";
import {addCourse} from "./actions";
import {Table} from 'react-bootstrap';
import {Container, Input, Button, Collapse, CardBody, Card, Label, Form} from "reactstrap";

export default class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses     : store.getState(),
            name        : '',
            startDate   : '',
            endDate     : '',
            toggle      : false,
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        let self = this;
        fetch('/courses', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(data => {
            self.setState({courses: data});
        }).catch(err => {
            console.log('caught it!', err);
        });
        store.subscribe( () => {
            this.setState({courses: store.getState()});
        });
    }

    toggle(e) {
        e.preventDefault();
        this.setState({collapse : !this.state.collapse});
    }
    nameChange(event) {
        this.setState({name: event.target.value })
    }
    startDateChange(event) {
        this.setState({startDate: event.target.value })
    }
    endDateChange(event) {
        this.setState({endDate: event.target.value })
    }
    handleClick(e) {
        e.preventDefault();

        let data = {
            name: this.state.name,
            startDate : this.state.startDate,
            endDate  : this.state.endDate
        };

        fetch('/course', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            store.dispatch(addCourse(data));
        }).catch(function(err) {
            console.log(err)
        });
    }
    render() {
        return (
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <td> NAME </td>
                        <td> START_DATE </td>
                        <td> END_DATE </td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.courses.map( course =>
                        <tr key={course.id}>
                            <td>{course.name}</td>
                            <td>{course.duration.startDate}</td>
                            <td>{course.duration.endDate}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
                <div>
                    <Button onClick={this.toggle} style ={{marginBottom:'1rem'}} >ADD</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <Form onSubmit={this.handleClick.bind(this)}>
                                    <Label>Name</Label>
                                    <Input name="name" type="text" onChange={this.nameChange.bind(this)} value={this.state.name} placeholder="Enter name course"/>
                                    <Label>Start_Date</Label>
                                    <Input onChange={this.startDateChange.bind(this)} value={this.state.startDate} name="startDate" type="date"/>
                                    <Label>End_Date</Label>
                                    <Input onChange={this.endDateChange.bind(this)} value={this.state.endDate} name="endDate" type={"date"}/>
                                    <br/>
                                    <Button>SAVE</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </Container>
        )
    }
}