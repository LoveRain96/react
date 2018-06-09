import React                                                                   from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link}                                                                  from "react-router-dom";
import { Icon, Layout, Menu, Dropdown }                                 from 'antd';
import RouterGuest                                                             from "./router/RouterGuest";
import RouterManagement                                                        from "./router/RouterManagement";
import RouterLecturer                                                          from "./router/RouterLecturer";

const {Sider} = Layout;


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    isAuthentication = () =>{
        return !!localStorage.getItem('user_name');
    };

    handleLogout = () => {
        localStorage.removeItem("user_name");
        localStorage.removeItem('avatar');
        localStorage.removeItem('email');
        localStorage.removeItem('role');
        this.setState({
            isOpenPopup: false,
            modalOpen  : false
        });

        window.location.href = '/login';
    };
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/user"><span>Setting</span></Link>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={this.handleLogout.bind(this)}>Logout</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">HOME</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href={'/new'}>NEW</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/courses'}>COURSES</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/companies'}>COMPANIES</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={'/contact'}>CONTACT</NavLink>
                            </NavItem>
                            <NavItem>
                                {this.isAuthentication() ?
                                    <Dropdown overlay={menu}>
                                        <NavLink href="/user">{localStorage.getItem('user_name')}<Icon type="caret-down" /></NavLink>
                                    </Dropdown>
                                    :
                                    <NavLink href={'/login'}>LOGIN</NavLink>
                                }
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Layout>
                {localStorage.getItem('role') === 'admin' ?
                        <Sider
                            breakpoint="lg"
                            collapsedWidth="0"
                            onCollapse={(collapsed, type) => {

                            }}
                        >
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', minHeight : '550px' , borderRight: 0}}
                            >
                                <Menu.Item key="1"><Link to="/management/courses"><Icon type="profile"/><span>COURSES</span></Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/management/companies"><Icon type="user"/><span>COMPANIES</span></Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/management/lecturers"><Icon type="user"/><span>LECTURERS</span></Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/management/interns"><Icon type="user"/><span>INTERNS</span></Link></Menu.Item>
                                <Menu.Item key="5"><Link to="/management/council"><Icon type="profile"/><span>COUNCIL</span></Link></Menu.Item>
                                <Menu.Item key="6"><Link to="/management/areas"><Icon type="profile"/><span>AREAS</span></Link></Menu.Item>
                            </Menu>
                        </Sider> : ''
                }
                {localStorage.getItem('role') === 'lecturer' ?
                        <Sider
                            breakpoint="lg"
                            collapsedWidth="0"
                            onCollapse={(collapsed, type) => {

                            }}
                        >
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', minHeight : '550px' , borderRight: 0}}
                            >
                                <Menu.Item key="1"><Link to="/management/companies"><Icon type="user"/><span>COMPANIES</span></Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/management/interns"><Icon type="user"/><span>INTERNS</span></Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/management/registration"><Icon type="profile"/><span>REGISTRATION</span></Link></Menu.Item>
                            </Menu>
                        </Sider> : ''
                }
                <Layout style={{ padding: '0 24px 24px' }}>
                    {localStorage.getItem('role') === 'admin' ?
                        <RouterManagement/> : ''
                    }
                    {localStorage.getItem('role') === 'lecturer' ?
                        <RouterLecturer/> : ''
                    }
                    <RouterGuest/>
                </Layout>
                </Layout>
            </div>
        );
    }
}