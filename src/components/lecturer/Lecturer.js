import React from 'react';
import {connect} from 'react-redux';
import {loadLecturer} from "./action";
import {Container} from 'reactstrap';
import LecturerList from "./LecturerList";



const mapDispatchToProps = function (dispatch) {
    return {
        loadLecturer: function () {
            dispatch(loadLecturer());
        }
    }
};
const mapStateToProps = function (state) {
    return {
        lecturers : state.lecturerReducer
    }
};

class Company extends React.Component {

    componentWillMount() {
        this.props.loadLecturer();
    }

    render() {
        return (
            <Container>
                <LecturerList lecturers = {this.props.lecturers}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)


