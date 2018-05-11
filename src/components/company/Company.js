import React from 'react';
import {connect} from 'react-redux';
import {loadCompany} from "./action";
import Modal from "react-modal";
import ListCompany from "./ListCompany";
import {Container} from 'reactstrap';
import {Button} from 'antd'

const mapDispatchToProps = function (dispatch) {
    return {
        loadCompany : function () {
            dispatch(loadCompany());
        }
    }
};
const mapStateToProps = function (state) {
    return {
        companies : state.companyReducer
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
        this.props.loadCompany();
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
                    <FormAddCourse collapse={this.state.collapse}/>
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)


