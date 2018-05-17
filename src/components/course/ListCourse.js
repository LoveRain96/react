import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux'
import {
    Container,
    Input,
    Label,
    Table

} from "reactstrap";
import {Breadcrumb, Button, Layout} from "antd"
import {deleteCourse, editCourse} from "./actions";
import {Link} from "react-router-dom";
import {listInternshipById} from "../internship/action";
import { Collapse, CardBody, Card } from 'reactstrap';
import InternshipList from "./InternshipList";

const mapDispatchToProps = function (dispatch) {
    return {
        editCourse : function (id, name, startDate, endDate, key_edit) {
            dispatch(editCourse(id, name, startDate, endDate, key_edit))
        },

        deleteCourse(id,key_delete) {
            dispatch(deleteCourse(id, key_delete))
        },
        listInternshipById : function (id) {
            dispatch(listInternshipById(id))
        }

    }
};

const mapStateToProps = function (state) {

    return {
        courses : state.addCourseReducer
    }
};

class ListCourse extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.renderInternship.bind(this);
        this.state = {
            courses: [],
            name: '',
            startDate: '',
            endDate: '',
            toggle: false,
            modalIsOpen: false,
            idChecked: [],
            collapse: false

        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    renderInternship(e) {
        e.preventDefault();
        this.setState({ collapse: !this.state.collapse });
        let id = e.currentTarget.getAttribute('data-course-id');
        this.props.listInternshipById(id);
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    openModal(course, key) {
        this.setState({
            modalIsOpen: true,
            name: course.name,
            startDate: course.startDate,
            endDate: course.endDate,
            id: course.id,
            key_edit: key
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    onEdited(e) {
        e.preventDefault();
        this.props.editCourse(this.state.id, this.state.name, this.state.startDate, this.state.endDate, this.state.key_edit);
        this.closeModal();
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

    onDeleted (e) {
        const nameCourse = e.currentTarget.getAttribute('name');
        let id = e.currentTarget.getAttribute('data-course-id');
        let index =  e.currentTarget.getAttribute('index');
        this.setState.key_delete = index;
        if (window.confirm('Do you want to delete this : '.concat(nameCourse))) {
            this.props.deleteCourse(id,index)
        }
    }

    render() {
        return (
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <th> NAME</th>
                        <th> START_DATE</th>
                        <th> END_DATE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.courses.map((course, index) =>
                        <tr key={index}>
                            <td><Link onClick={this.renderInternship.bind(this)} data-course-id={course.id} to ={"/course/".concat(course.id).concat('/internships')}>{course.name}</Link></td>
                            <td>{course.startDate}</td>
                            <td>{course.endDate}</td>
                            {/**DELETE**/}
                            <td><Button data-course-id={course.id} index={index} name={course.name}
                                        onClick={this.onDeleted.bind(this)}> Delete </Button></td>

                            {/** EDIT **/}
                            <td><Button courseid={course.id} onClick={() => this.openModal(course, index)}
                                            style={{marginBottom: '1rem'}}>Edit</Button></td>
                            <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
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
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <Layout>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item> INTERNSHIPS</Breadcrumb.Item>
                            </Breadcrumb>
                            <CardBody>
                                <InternshipList/>
                            </CardBody>
                        </Layout>
                    </Card>
                </Collapse>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCourse);