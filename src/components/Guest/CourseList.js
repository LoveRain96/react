import React                from 'react';
import Modal                from 'react-modal';
import {Container, Table}   from "reactstrap";
import {connect}            from  'react-redux';
import {loadCourse}         from "../course/actions";
import {Link}               from 'react-router-dom';
import Breadcrumb from "antd/es/breadcrumb/Breadcrumb";

const mapDispatchToProps = function (dispatch) {
    return {
        loadCourse : function () {
            dispatch(loadCourse());
        }
    }
};

const mapStateToProps = function (state) {
    return {
        courses : state.addCourseReducer,
    }
};

class CourseList extends React.Component {
    componentDidMount() {
        this.props.loadCourse();
        Modal.setAppElement('body');
    }

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>COURSES</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
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
                                    <td><Link to ={"/course/".concat(course.id)}>{course.name}</Link></td>
                                    <td>{course.startDate}</td>
                                    <td>{course.endDate}</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)