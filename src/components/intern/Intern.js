import React from 'react';
import {connect} from 'react-redux';
import {loadIntern} from "./action";
import {Container} from 'reactstrap';
import InternList from "./InternList";



const mapDispatchToProps = function (dispatch) {
    return {
        loadIntern: function () {
            dispatch(loadIntern());
        }
    }
};
const mapStateToProps = function (state) {
    return {
        interns : state.internReducer
    }
};

class Intern extends React.Component {

    componentWillMount() {
        this.props.loadIntern();
    }

    render() {
        return (
            <Container>
                <InternList interns = {this.props.interns}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intern)


