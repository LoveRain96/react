import React from 'react';
import {Form, Icon, Input, Button, Checkbox, Breadcrumb, Row, Col} from 'antd';
import {Container} from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }
    openModal() {
        this.setState({
            modalIsOpen: true,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>LOGIN</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    <Row>
                        <Col span={8} offset={8}>
                            <Container>
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <Form.Item>
                                        {getFieldDecorator('userName', {
                                            rules: [{required: true, message: 'Please input your username!'}],
                                        })(
                                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                   placeholder="Username"/>
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        {getFieldDecorator('password', {
                                            rules: [{required: true, message: 'Please input your Password!'}],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                   type="password" placeholder="Password"/>
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        })(
                                            <Checkbox>Remember me</Checkbox>
                                        )}
                                        <a className="login-form-forgot" href="">Forgot password</a>
                                        <div>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                Login
                                            </Button>
                                        </div>
                                        <div>
                                            Or <a href="">register now!</a>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </Container>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
const FormLogin = Form.create()(Login);
export  default FormLogin;