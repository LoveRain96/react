import React                            from 'react';
import { CardHeader, Container, Table } from "reactstrap";
import {connect}                        from  'react-redux';
import {loadCourse}                     from "../course/actions";
import {Link}                           from 'react-router-dom';
import Breadcrumb                       from "antd/es/breadcrumb/Breadcrumb";
import {listInternshipById}             from "../internship/action";
import InternshipList                   from "./InternshipList";
import { Collapse, CardBody, Card }     from 'reactstrap';
import {Layout}                         from "antd";

const mapDispatchToProps = function (dispatch) {

    return {
        loadCourse : function () {
            dispatch(loadCourse());
        },

        listInternshipById : function (id) {
            dispatch(listInternshipById(id))
        }

    }
};

const mapStateToProps = function (state) {
    return {
        courses : state.addCourseReducer,
    }
};

class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.renderInternship.bind(this);
        this.state = { collapse: false };
    }
    componentDidMount() {
        this.props.loadCourse();
    }
    renderInternship(e) {
        e.preventDefault();
        this.setState({ collapse: !this.state.collapse });
        let id = e.currentTarget.getAttribute('data-course-id');
        this.props.listInternshipById(id);
    }
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><b>COURSES</b></Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff'}}>
                    <Container>
                        <Table striped>
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th> NAME</th>
                                <th> START_DATE</th>
                                <th> END_DATE</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.courses.map((course, index) =>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td><Link onClick={this.renderInternship.bind(this)} data-course-id={course.id} to ={"/course/".concat(course.id).concat('/internships')}>{course.name}</Link></td>
                                    <td>{course.startDate}</td>
                                    <td>{course.endDate}</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </Container>
                </div>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <Layout>
                            <CardHeader><b>LIST INTERNSHIP</b></CardHeader>
                        <CardBody>
                            <InternshipList/>
                        </CardBody>
                        </Layout>
                    </Card>
                </Collapse>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)