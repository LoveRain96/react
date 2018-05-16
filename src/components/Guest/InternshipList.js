import { Tabs } from 'antd';
import React from "react";
import {connect}            from  'react-redux';
import {loadInternship} from "../internship/action";

const TabPane = Tabs.TabPane;

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
            <div style={{ padding: 24, background: '#fff'}}>
                <Tabs tabPosition={'left'} type="card">
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
