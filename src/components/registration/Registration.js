import React                                                     from 'react';
import { Breadcrumb, Button, Select }                            from "antd";
import { courseService, internshipService, registrationService } from "../../services";
import { Input, Table }                                          from "reactstrap";
const Option = Select.Option;

class Registration extends React.Component {
    state = {
        courses : [],
        internships : [],
        registrations : [],
        confirmed : [],
        pending : [],
        listConfirmed : '',
    };
    componentWillMount() {
        courseService.getCourses().then(res => {
            this.setState({
                courses : res.data
            },() => {
                internshipService.getInternship(this.state.courses[0].id).then(res => {
                    this.setState({
                        internships: res.data
                    })
                });
            })
        });

    }
    onChangeCourse(value) {
        internshipService.getInternship(value).then(res => {
            this.setState({
                internships: res.data
            })
        })
    };
    onChangeInternship(id) {
        let lecturer_code = localStorage.getItem('code');
        console.log(lecturer_code);
        registrationService.getConfirmed(id,{lecturer_code: lecturer_code}).then(res => {
            this.setState({
                confirmed : res.data,
                internship_id : id
            })
        });
        registrationService.getPending(id, {lecturer_code: lecturer_code}).then(res => {
            this.setState({
                pending : res.data,
                internship_id : id,
            })
        })
    }
    onChangeConfirmed(intern) {
        this.setState({
            listConfirmed : [...this.state.listConfirmed,{...intern}]
        })
    }
    sendConfirmed(){
        this.state.listConfirmed.map(intern => {
            return registrationService.confirmed(this.state.internship_id, {intern_code : intern.code})
        })
    }
    render() {

        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>REGISTRATION</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <label>Course : </label>
                    <Select style={{ width: '40%' }} onChange={(value) => this.onChangeCourse(value)}>
                        {this.state.courses.map((course, index ) =>
                            <Option value={course.id} key={index}>{course.name}</Option>
                        )}
                    </Select>
                    <label style={{marginLeft: 20}}> Internships : </label>
                    <Select style={{width: '40%' }} onChange={(value)=> this.onChangeInternship(value)}>
                        {this.state.internships.map((internship, index ) =>
                            <Option value={internship.id} key={index}>{internship.company.name}</Option>
                        )}
                    </Select>
                    <label style={{marginTop : 30}}><b>List Registration Confirmed</b></label>
                    <Table>
                        <thead>
                        <tr>
                            <th>Code</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.confirmed.map((intern, index) =>
                                <tr key={index}>
                                    <th>{intern.code}</th>
                                    <td>{intern.firstName}</td>
                                    <td>{intern.lastName}</td>
                                    <td>{intern.gender}</td>
                                    <td>{intern.dateOfBirth}</td>
                                    <td>{intern.address}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    <div>
                        <label><b>List Registration Pending</b></label>
                    </div>
                    <Table>
                        <thead>
                        <tr>
                            <th>Code</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Address</th>
                            <th style={{textAlign: 'center'}}>Confirmed</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.pending.map((intern, index) =>
                                <tr key={index}>
                                    <th>{intern.code}</th>
                                    <td>{intern.firstName}</td>
                                    <td>{intern.lastName}</td>
                                    <td>{intern.gender}</td>
                                    <td>{intern.dateOfBirth}</td>
                                    <td>{intern.address}</td>
                                    <td style={{textAlign: 'center'}}>
                                        <Input onChange={()=>this.onChangeConfirmed(intern)} type="checkbox" />
                                    </td>
                                </tr>
                            )
                        }
                        <tr>
                            <td colSpan={6}/>
                            <td style={{textAlign: 'center'}}>
                                <Button onClick={this.sendConfirmed.bind(this)}>Confirmed</Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
export default Registration;