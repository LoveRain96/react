import React                from 'react';
import {Container, Table, Button} from "reactstrap";
import Breadcrumb from "antd/es/breadcrumb/Breadcrumb";
export default class InternList extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>INTERNS</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', fontSize: 12 }}>
                    <Container>
                        <Button onClick={this.toggle} style={{marginBottom: '1rem'}}>IMPORT</Button>
                        <Table striped>
                            <thead>
                            <tr>
                                <th> MASV </th>
                                <th> FIRSTNAME</th>
                                <th> LASTNAME</th>
                                <th> GENDER</th>
                                <th> DATEOFBIRTH</th>
                                <th> IDCARD</th>
                                <th> PROVIDE</th>
                                <th> ISSUED</th>
                                <th> PHONE</th>
                                <th> PHONEPARENT</th>
                                <th> EMAIL</th>
                                <th> ADDRESS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.interns.map((intern, index) =>
                                <tr key={index}>
                                    <td>{intern.code}</td>
                                    <td>{intern.firstName}</td>
                                    <td>{intern.lastName}</td>
                                    <td>{intern.gender}</td>
                                    <td>{intern.dateOfBirth}</td>
                                    <td>{intern.idCard}</td>
                                    <td>{intern.provide}</td>
                                    <td>{intern.issued}</td>
                                    <td>{intern.phoneParent}</td>
                                    <td>{intern.phone}</td>
                                    <td>{intern.email}</td>
                                    <td>{intern.address}</td>
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

