import  React from 'react'
import {Input ,Layout, Menu, Icon } from 'antd'
import Router from "./components/Guest/Router";
import {Link} from "react-router-dom";
const Search = Input.Search;
//import HeaderNavbav from "./HeaderNavbar";
const { Header, Content, Footer, Sider} = Layout;

export default class LayoutDemo extends React.Component {
    render() {
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1"><Icon type="appstore-o" /><span>MANAGEMENT</span></Menu.Item>
                        <Menu.Item key="2"><Icon type="profile" /><span>COURSES</span></Menu.Item>
                        <Menu.Item key="3"><Icon type="user" /><span>COMPANIES</span></Menu.Item>
                        <Menu.Item key="4"><Icon type="user" /><span>LECTURER</span></Menu.Item>
                        <Menu.Item key="5"><Icon type="user" /><span>INTERNS</span></Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <div className="logo"/>
                        <Menu
                            theme="white"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">
                                <Search
                                    placeholder="keyword search course, companies, interns"
                                    onSearch={value => console.log(value)}
                                    style={{ width: 500, marginLeft : 100 }}
                                />
                            </Menu.Item>
                            <Menu.Item key="2"><Link to='/courses'>COURSES</Link></Menu.Item>
                            <Menu.Item key="3"><Link to='/companies'>COMPANIES</Link></Menu.Item>
                            <Menu.Item key="4">CONTACT</Menu.Item>
                            <Menu.Item key="5">LOGIN</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Router/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Copyright@
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

