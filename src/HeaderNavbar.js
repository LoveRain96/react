import React from 'react';
import {Input, Layout, Menu} from 'antd';
const { Header} = Layout;
const Search = Input.Search;

export default class HeaderNavbar extends React.Component {
    render() {
        return (
            <div>
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
                    <Menu.Item key="2">COURSES</Menu.Item>
                    <Menu.Item key="3">COMPANIES</Menu.Item>
                    <Menu.Item key="4">CONTACT</Menu.Item>
                    <Menu.Item key="5">LOGIN</Menu.Item>
                </Menu>
            </div>
        )
    }

}