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
import Router from "./components/Guest/Router";

import {Breadcrumb, Icon, Input, Layout, Menu} from 'antd';

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
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Search
                                    placeholder="Search ..."
                                    onSearch={value => console.log(value)}
                                />
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to={'/'}>NEW</Link></NavLink>
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
                    <Sider width={200} style={{ background: '#fff' }}
                           breakpoint ='lg'
                           collapseWith='0'
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1"><Icon type="appstore-o" /><span>MANAGEMENT</span></Menu.Item>
                            <Menu.Item key="2"><Icon type="profile" /><span>COURSES</span></Menu.Item>
                            <Menu.Item key="3"><Icon type="user" /><span>COMPANIES</span></Menu.Item>
                            <Menu.Item key="4"><Icon type="user" /><span>LECTURER</span></Menu.Item>
                            <Menu.Item key="5"><Icon type="user" /><span>INTERNS</span></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <Router/>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}