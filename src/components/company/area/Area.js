import React from 'react';
import {connect} from 'react-redux';
import Modal from "react-modal";
import {Container} from 'reactstrap';
import {Button} from 'antd'
import {loadArea} from "./action";



const mapDispatchToProps = function (dispatch) {
    return {
        loadArea : function () {
            dispatch(loadArea());
        }
    }
};
const mapStateToProps = function (state) {
    return {
        areas : state.areaReducer
    }
};

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            toggle : false,

        }
    }

    componentWillMount() {
        this.props.loadArea();
        Modal.setAppElement('body');
    }
    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        return (
            <Container>
                <ListCompany companies = {this.props.companies}/>
                <div>
                    <Button onClick={this.toggle} style={{marginBottom: '1rem'}}>ADD</Button>
                    <FormAddCompany collapse={this.state.collapse}/>
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)


