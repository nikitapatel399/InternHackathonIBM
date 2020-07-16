import React, { Component } from 'react';
// import logo from './logo.svg';
import { Layout, Menu } from 'antd';
import './App.css';
import Map from "./components/Map";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render () {
    return (
      <Layout>
        <Header>
          <div/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Detail</Menu.Item>
            <Menu.Item key="3">About</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        {/* <SVGMap map={this.customTaiwan} /> */}
        {/* <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div> */}
        <Map/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

export default App;
