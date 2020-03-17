import React from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export default function() {
  return (
    <div className="container--center">
      <div style={{ textAlign: 'center', verticalAlign: 'center' }}>
        <Title>True e-Logistic Full-Stack Challenge</Title>
        <div>
          <Link to="/product">
            <Button className="button" type="link">
              Go to Product Page
            </Button>
          </Link>
          <Link to="/login">
            <Button className="button" type="link">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
