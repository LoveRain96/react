import React                from 'react';
import {Container, Table, Button} from "reactstrap";
import Breadcrumb from "antd/es/breadcrumb/Breadcrumb";
export default class CourseList extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>LECTURERS</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Container>
                        <Button onClick={this.toggle} style={{marginBottom: '1rem'}}>IMPORT</Button>
                        <Table striped>
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th> MAGV </th>
                                <th> NAME</th>
                                <th> GENDER</th>
                                <th> PHONE</th>
                                <th> EMAIL</th>
                                <th> ADDRESS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.lecturers.map((lecturer, index) =>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{lecturer.code}</td>
                                    <td>{lecturer.name}</td>
                                    <td>{lecturer.gender}</td>
                                    <td>{lecturer.phone}</td>
                                    <td>{lecturer.email}</td>
                                    <td>{lecturer.address}</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </div>
        )
    }
}

