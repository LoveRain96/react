import  React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import HeaderNavbav from "./HeaderNavbar";
import Router from "./components/Guest/Router";

const { Header, Content, Footer, Sider} = Layout;

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
                        <Menu.Item key="1"><Icon type="appstore-o" /><span>MANAGEMENT</span></Menu.Item>
                        <Menu.Item key="2"><Icon type="profile" /><span>COURSES</span></Menu.Item>
                        <Menu.Item key="3"><Icon type="user" /><span>COMPANIES</span></Menu.Item>
                        <Menu.Item key="4"><Icon type="user" /><span>LECTURER</span></Menu.Item>
                        <Menu.Item key="5"><Icon type="user" /><span>INTERNS</span></Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header>
                        <HeaderNavbav/>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Router/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Copyright@
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

