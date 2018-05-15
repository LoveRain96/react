import React                from 'react';
import Modal                from 'react-modal';
import {Container, Table}   from "reactstrap";
import {connect}            from  'react-redux';
import Breadcrumb from "antd/es/breadcrumb/Breadcrumb";
import {loadInternship} from "../internship/action";

const mapDispatchToProps = function (dispatch) {
    return {
        loadInternship : function () {
            dispatch(loadInternship());
        }
    }
};

const mapStateToProps = function (state) {
    console.log(state.internshipReducer);
    return {
        internships : state.internshipReducer,
    }
};

class InternshipList extends React.Component {
    componentDidMount() {
        this.props.loadInternship();
        Modal.setAppElement('body');
    }

    render() {
        return (
            <div>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Table striped>
                            <thead>
                            <tr>
                                <th> STT </th>
                                <th> COMPANY NAME</th>
                                <th> COMPANY ADDRESS</th>
                                <th> PHONE MANAGER</th>
                                <th> EMAIL MANAGER</th>
                                <th> NAME MANAGER</th>
                                <th> LECTURER NAME </th>
                                <th> LECTURER PHONE </th>
                                <th> LECTURER EMAIL </th>
                                <th> DEADLINE </th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.internships.map((internship, index) =>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{internship.company.name}</td>
                                    <td>{internship.company.address}</td>
                                    <td>{internship.company.phoneManager}</td>
                                    <td>{internship.company.emailManager}</td>
                                    <td>{internship.company.nameManager}</td>
                                    <td>{internship.lecturer.name}</td>
                                    <td>{internship.lecturer.phone}</td>
                                        <td>{internship.lecturer.email}</td>
                                    <td>{internship.deadline}</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InternshipList)