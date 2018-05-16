import { Tabs, Select } from 'antd';
import React from "react";
import {connect}            from  'react-redux';
import {loadInternship} from "../internship/action";

const TabPane = Tabs.TabPane;
const Option = Select.Option;

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
    }
    render() {
        return (
            <div>
                <Tabs tabPosition={'left'}>
                    {this.props.internships.map((internship, index) =>
                        <TabPane tab={internship.company.name} key={index}>
                            <ul>
                                <h2>Company</h2>
                                <li> Company Name : {internship.company.name}</li>
                                <li> Company Address : {internship.company.address}</li>
                                <li> Phone Manager : {internship.company.phoneManager}</li>
                                <li> Email Manager : {internship.company.emailManager}</li>
                                <li> Name Manager : {internship.company.nameManager}</li>
                                <h2>Lecturer manager</h2>
                                <li> Lecturer Name : {internship.lecturer.name}</li>
                                <li> Lecturer Phone : {internship.lecturer.phone}</li>
                                <li> Lecturer Email : {internship.lecturer.email}</li>
                                <li> Deadline : {internship.deadline}</li>
                            </ul>
                        </TabPane>
                    )}
                </Tabs>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InternshipList)
/*

import React                from 'react';
import Modal                from 'react-modal';
import {Table}   from "reactstrap";
import {connect}            from  'react-redux';



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
                                    <td> </td>
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

export default connect(mapStateToProps, mapDispatchToProps)(InternshipList)*/
