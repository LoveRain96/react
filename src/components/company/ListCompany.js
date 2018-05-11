import React from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Table

} from "reactstrap";

const mapDispatchToProps = function (dispatch) {
    return {

        }
};

const mapStateToProps = function (state) {

    return {
        companies : state.companyReducer
    }
};


class ListCompany extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneManager :'',
            emailManager : '',
            nameManager  : '',
            address      : ''
        }
    }
   /* nameChange(event) {
        this.setState({name: event.target.value})
    }

    startDateChange(event) {
        this.setState({startDate: event.target.value})
    }

    endDateChange(event) {
        this.setState({endDate: event.target.value})
    }*/
    render() {
        return (
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <th> STT </th>
                        <th> NAME </th>
                        <th> PHONE MANAGER </th>
                        <th> EMAIL MANAGER </th>
                        <th> NAME MANAGER </th>
                        <th> ADDRESS </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.companies.map((company, index) =>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{company.name}</td>
                            <td>{company.phoneManager}</td>
                            <td>{company.emailManager}</td>
                            <td>{company.nameManager}</td>
                            <td>{company.address}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListCompany);