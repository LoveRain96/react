import React                      from 'react';
import {connect}                  from 'react-redux';
import {loadIntern}               from "./action";
import {Container, Table} from "reactstrap";
import {Breadcrumb , Button}               from "antd";
import { internService }          from "../../services";
import { Link }                   from "react-router-dom";




const mapDispatchToProps = function (dispatch) {
    return {
        loadIntern: function () {
            dispatch(loadIntern());
        }
    }
};
const mapStateToProps = function (state) {
    return {
        interns : state.internReducer
    }
};

class Intern extends React.Component {
    state = {
        interns : []
    };

    componentWillMount() {
        internService.getInterns().then(res => {
            this.setState({
                interns : res.data
            })
        })
    }
    deleteIntern(e) {
        this.state.interns.splice(e.target.getAttribute('data-key'),1);
        internService.deleteIntern(e.target.getAttribute('data-id')).then(res => {
            this.setState({
                interns : this.state.interns
            })
        })
    }
    render() {
        return (
            <Container>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>INTERNS</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff'}}>
                    <Container>
                        <Link to={'/management/intern'}><Button>ADD</Button></Link>
                        <Button>IMPORT</Button>
                        <hr/>
                        <Table striped>
                            <thead>
                            <tr>
                                <th> MASV </th>
                                <th> LASTNAME</th>
                                <th> FIRSTNAME</th>
                                <th> GENDER</th>
                                <th> DATEOFBIRTH</th>
                                <th> IDCARD</th>
                                <th>PHONE</th>
                                <th> ADDRESS</th>
                                <th> ACTION</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.interns.map((intern, index) =>
                                <tr key={index}>
                                    <td><Link to={`/management/intern/${intern.code}`}>{intern.code}</Link></td>
                                    <td>{intern.lastName}</td>
                                    <td>{intern.firstName}</td>
                                    <td>{intern.gender}</td>
                                    <td>{intern.dateOfBirth}</td>
                                    <td>{intern.idCard}</td>
                                    <td>{intern.phone}</td>
                                    <td>{intern.address}</td>
                                    <td><Button data-id={intern.code} data-key={intern} onClick={this.deleteIntern.bind(this)}>DELETE</Button></td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intern)


