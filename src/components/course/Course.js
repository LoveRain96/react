import React from 'react';
import Modal from 'react-modal';
import {
    Container,
} from "reactstrap";
import ListCourse from "./ListCourse";
import FormAddCourse from "./FormAddCourse";
import {Breadcrumb, Button} from "antd"
import {connect} from  'react-redux';
import {loadCourse} from "./actions";

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

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            course_id : '',
            name: '',
            startDate: '',
            endDate: '',
            toggle: false,
            modalIsOpen: false

        };
    }

     componentDidMount() {
         this.props.loadCourse();
         Modal.setAppElement('body');
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }
    onChange(value) {
        this.setState({
            course_id : value
        })
    }

    render() {
        return (
            <Container>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><b>COURSES</b></Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <ListCourse courses={this.props.courses} />
                    <div style={{marginTop : 10, marginLeft : 16}}>
                        <Button onClick={this.toggle} style={{marginBottom: '1rem'}}>ADD</Button>
                        <FormAddCourse collapse={this.state.collapse}/>
                    </div>
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)