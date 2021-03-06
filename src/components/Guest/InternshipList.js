import { Tabs ,Button}         from 'antd';
import React                   from "react";
import {connect}               from  'react-redux';
import {loadInternship}        from "../internship/action";
import { registrationService } from "../../services";

const TabPane = Tabs.TabPane;

const mapDispatchToProps = function (dispatch) {
    return {
        loadInternship : function () {
            dispatch(loadInternship());
        }
    }
};

const mapStateToProps = function (state) {
    return {
        internships : state.internshipReducer,
    }
};
class InternshipList extends React.Component {
    componentDidMount() {
        this.props.loadInternship();
    }
    registration(id) {
        let code = localStorage.getItem('code');
        registrationService.registration(id, {code: code}).then(res => {
            alert('registration success')
        }).catch(err => {
            alert(err)
        })
    }
    render() {
        return (
            <div style={{ padding: 24, background: '#fff'}}>
                <Tabs tabPosition={'top'} type="card">
                    {this.props.internships.map((internship, index) =>
                        <TabPane tab={internship.company.name} key={index}>
                            <ul>
                                <h2> Company </h2>
                                <li> Company Name : {internship.company.name}</li>
                                <li> Company Address : {internship.company.address}</li>
                                <li> Phone Manager : {internship.company.phoneManager}</li>
                                <li> Email Manager : {internship.company.emailManager}</li>
                                <li> Name Manager : {internship.company.nameManager}</li>
                                <h2> Lecturer manager </h2>
                                <li> Lecturer Name : {internship.lecturer.name}</li>
                                <li> Lecturer Phone : {internship.lecturer.phone}</li>
                                <li> Lecturer Email : {internship.lecturer.email}</li>
                                <li> Deadline : {internship.deadline}</li>
                            </ul>
                            <Button type="primary" onClick={()=>this.registration(internship.id)}>Registration</Button>
                        </TabPane>
                    )}
                </Tabs>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InternshipList)
