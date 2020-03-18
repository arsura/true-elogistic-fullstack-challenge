import React from 'react';
import { Button, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserOutlined, InboxOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <Title>
          <font color="#ec2127">True</font>
          <font color="#0098ef"> e-Logistic</font>
          Full-Stack Challenge
        </Title>
        <div>
          <Link to="/product">
            <Button type="link" icon={<InboxOutlined />}>
              Product Page
            </Button>
          </Link>
          {!isAuthenticated && (
            <Link to="/login">
              <Button type="link" icon={<UserOutlined />}>
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}