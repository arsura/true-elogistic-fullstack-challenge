import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import {
  InboxOutlined,
  UserOutlined,
  CaretDownOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import setToken from '../helpers/setToken';
import * as auth from '../redux/actions/auth';

const { Header, Content, Footer, Sider } = Layout;

const Logo = styled.div`
  height: 3.6rem;
  background: rgba(255, 255, 255, 0.2);
  margin: 1.4rem;
`;

const AcountMenu = styled.span`
  float: right;
  padding-right: 1.6rem;
`;

const AcountAvater = styled(Avatar)`
  margin-right: 1.4rem;
  background-color: #1890ff;
`;

const LayoutContainer = styled(Layout)`
  min-height: 100vh;
`;

const HeaderContainer = styled(Header)`
  padding: 0;
  background: #fff;
`;

const ContentContainer = styled(Content)`
  margin: 1.4rem;
`;

const FooterContainer = styled(Footer)`
  text-align: center;
`;

function DefaultLayout(props) {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  function logout() {
    setToken(false);
    dispatch(auth.setCurrentUser({}));
    dispatch(push('/'));
  }

  return (
    <LayoutContainer>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={collapsed => setCollapsed(collapsed)}
      >
        <Link to="/">
          <Logo />
        </Link>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <InboxOutlined />
            <span>Product</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <HeaderContainer>
          <AcountMenu>
            <AcountAvater size="large" icon={<UserOutlined />} />
            <Dropdown
              overlay={() => (
                <Menu>
                  <Menu.Item onClick={() => logout()}>
                    <Link to="#">Logout</Link>
                  </Menu.Item>
                </Menu>
              )}
              trigger={['click']}
            >
              <Link to="#">
                {user}
                <CaretDownOutlined />
              </Link>
            </Dropdown>
          </AcountMenu>
        </HeaderContainer>
        <ContentContainer>{props.children}</ContentContainer>
        <FooterContainer>True e-Logistic Full-Stack Challange</FooterContainer>
      </Layout>
    </LayoutContainer>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;