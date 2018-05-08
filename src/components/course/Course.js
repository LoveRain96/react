import React from 'react';
import store from "./store";
import Modal from 'react-modal';
import {
    Container,
    Button,
} from "reactstrap";
import ListCourse from "./ListCourse";
import FormAddCourse from "./FormAddCourse";
import getCourses from "./getCourse";
import {addCourse} from "./actions";

export default class Course extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.editToggle = this.editToggle.bind(this);
        this.state = {
            courses: store.getState(),
            name: '',
            startDate: '',
            endDate: '',
            toggle: false,
            modalIsOpen: false

        };
    }

     componentDidMount() {
        getCourses().then( data => {
            data.map( data => store.dispatch(addCourse(data)));
        });
        store.subscribe( () => {
            this.setState({ courses:  store.getState()});
        });
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    editToggle() {
        this.setState({modal: !this.state.modal});
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        return (
            <Container>
                <ListCourse courses={this.state.courses}/>
                <div>
                    <Button onClick={this.toggle} style={{marginBottom: '1rem'}}>ADD</Button>
                    <FormAddCourse collapse={this.state.collapse}/>
                </div>
            </Container>
        )
    }
}