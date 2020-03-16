import React, { useState } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { InboxOutlined, UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './default.css';

const { Header, Content, Footer, Sider } = Layout;

function DefaultLayout(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={collapsed => setCollapsed(collapsed)}>
        <Link to="/">
          <div className="logo" />
        </Link>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <InboxOutlined />
            <span>Product</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <span style={{ paddingRight: 16, float: 'right' }}>
            <Avatar size="large" icon={<UserOutlined />} style={{ marginRight: 8 }} /> 
            <b>Siwakorn</b>
            <CaretDownOutlined />
          </span>
        </Header>
        <Content style={{ margin: 16 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <Footer className="footer">True e-Logistic Full-Stack Challange</Footer>
      </Layout>
    </Layout>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;