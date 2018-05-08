import React from 'react';
import {Table} from 'react-bootstrap';
import Modal from 'react-modal';
import {
    Container,
    Input,
    Button,
    Label,

} from "reactstrap";
import store from "./store";
import {deleteCourse, editCourse} from "./actions";
import axios from "axios";

export default class ListCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            name: '',
            startDate: '',
            endDate: '',
            toggle: false,
            modalIsOpen: false,
            modalDeleteIsOpen: false

        };
        this.openModal = this.openModal.bind(this);
        this.openModalDelete = this.openModalDelete.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    openModal(course, key) {
        this.setState({
            modalIsOpen: true,
            name: course.name,
            startDate: course.duration.startDate,
            endDate: course.duration.endDate,
            id: course.id,
            key_edit: key
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    closeModalDelete() {
        this.setState({
            modalDeleteIsOpen: false
        });
    }

    openModalDelete(courseId, key) {
        this.setState({
            modalDeleteIsOpen: true,
            id: courseId,
            key_delete: key
        });
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

    onDeleted(e) {
        const courseId = e.currentTarget.getAttribute('courseid');
        const index = e.currentTarget.getAttribute('index');
        const nameCourse = e.currentTarget.getAttribute('nameCourse');
        if (window.confirm('Do you want to delete this : '.concat(nameCourse))) {
            axios.delete('/course/'.concat(courseId)).then(() => {
                store.dispatch(deleteCourse(courseId, index));
                this.closeModalDelete();
            });
        }
        }

    onEdited(e) {
        e.preventDefault();
        let self = this;

        axios.put('/course/'.concat(this.state.id), {
            name: this.state.name,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            id: this.state.id
        }).then(res => {
            store.dispatch(editCourse(res.data, self.state.key_edit));
            self.closeModal();
        });
    }

    render() {
        return (
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <td> NAME</td>
                        <td> START_DATE</td>
                        <td> END_DATE</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.courses.map((course, index) =>
                        <tr key={course.id}>
                            <td>{course.name}</td>
                            <td>{course.duration.startDate}</td>
                            <td>{course.duration.endDate}</td>
                            {/**DELETE**/}
                            <td><Button courseid={course.id} index={index} nameCourse={course.name}
                                        onClick={this.onDeleted.bind(this)}> Delete </Button></td>


                            {/** EDIT **/}
                            <td><Button courseid={course.id} onClick={() => this.openModal(course, index)}
                                        style={{marginBottom: '1rem'}}>Edit</Button></td>
                            <Modal isOpen={this.state.modalIsOpen}
                                   onRequestClose={this.closeModal}
                            >
                                <Label>Name</Label>
                                <Input name="name" type="text" value={this.state.name}
                                       onChange={this.nameChange.bind(this)}
                                       placeholder="Enter name course"/>
                                <Label>Start_Date</Label>
                                <Input onChange={this.startDateChange.bind(this)} value={this.state.startDate}
                                       name="startDate" type="date"/>
                                <Label>End_Date</Label>
                                <Input onChange={this.endDateChange.bind(this)} value={this.state.endDate}
                                       name="endDate" type={"date"}/>
                                <br/>
                                <Button onClick={this.onEdited.bind(this)}>SAVE</Button>
                            </Modal>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}