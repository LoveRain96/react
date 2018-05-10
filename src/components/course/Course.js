import React from 'react';
import Modal from 'react-modal';
import {
    Container,
} from "reactstrap";
import ListCourse from "./ListCourse";
import FormAddCourse from "./FormAddCourse";
import {Button} from  "antd"
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
        this.editToggle = this.editToggle.bind(this);
        this.state = {
            name: '',
            startDate: '',
            endDate: '',
            toggle: false,
            modalIsOpen: false

        };
    }

     componentDidMount() {
        /*getCourses().then( data => {
            data.map( data => store.dispatch(addCourse(data, false)));
        });
        store.subscribe( () => {
            this.setState({ courses:  store.getState()});
        });*/
         this.props.loadCourse();
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
                <ListCourse courses={this.props.courses}/>
                <div>
                    <Button onClick={this.toggle} style={{marginBottom: '1rem'}}>ADD</Button>
                    <FormAddCourse collapse={this.state.collapse}/>
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)