import  React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
//import Course from "./components/course/Course";
import FormLogin from "./components/login/fromLogin";
import Company from "./components/company/Company";

//import {Link} from "react-router-dom";
const { Header, Content, Footer, Sider, } = Layout;
const SubMenu = Menu.SubMenu;

export default class LayoutDemo extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>MANAGEMENT</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="taobao"/><span>MANAGEMENT</span></span>}
                        >
                            <Menu.Item key="3">COURSE</Menu.Item>
                            <Menu.Item key="4">COMPANY</Menu.Item>
                            <Menu.Item key="5">LECTURE</Menu.Item>
                            <Menu.Item key="6">INTERN</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <div>

                        </div>
                        <div >
                            <FormLogin/>
                        </div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>COURSE</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {/*<Course/>*/}
                            <Company/>
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

