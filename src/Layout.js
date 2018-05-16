import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem, NavLink,
} from 'reactstrap';
import {Link} from "react-router-dom";

import {Breadcrumb, Icon, Layout,Input, Menu} from 'antd';
import RouterGuest from "./router/RouterGuest";
import RouterManagement from "./router/RouterManagement";

const {Content, Sider} = Layout;


const Search = Input.Search;
export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">HOME</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Search
                                    placeholder="Search ..."
                                    onSearch={value => console.log(value)}
                                />
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to={'/new'}>NEW</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to={'/courses'}>COURSES</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to={'/companies'}>COMPANIES</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to={'/contact'}>CONTACT</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to={'/login'}>LOGIN</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <Menu.Item key="1"><Icon type="appstore-o"/><span>MANAGEMENT</span></Menu.Item>
                            <Menu.Item key="2"><Icon type="profile"/><span><Link to="/management/courses">COURSES</Link></span></Menu.Item>
                            <Menu.Item key="3"><Icon type="user"/><span><Link
                                to="/management/companies">COMPANIES</Link></span></Menu.Item>
                            <Menu.Item key="4"><Icon type="user"/><span><Link
                                to="/management/lecturers">LECTURERS</Link></span></Menu.Item>
                            <Menu.Item key="5"><Icon type="user"/><span><Link
                                to="/management/interns">INTERNS</Link></span></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <RouterGuest/>
                        <RouterManagement/>
                    </Layout>
                </Layout>
            </div>
        );
    }
}