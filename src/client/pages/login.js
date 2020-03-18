import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import jwtDecode from 'jwt-decode';
import { Form, Input, Button, Typography, message } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import * as auth from '../redux/actions/auth';
import setToken from '../helpers/setToken';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

export default function() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(push('/'));
    }
  }, []);

  async function login(account) {
    try {
      const res = await axios.post('/api/auth', account);
      const user = jwtDecode(res.data.token);
      setToken(res.data.token);
      dispatch(auth.loginSucceeded(user));
      dispatch(push('/'));
    } catch (e) {
      dispatch(auth.loginFailed(e.response.data));
      message.warning(e.response.data.message);
    }
  }

  return (
    <div className="container">
      <div>
        <Title style={{ textAlign: 'center' }}>Login🍻</Title>
        <Form {...layout} onFinish={async values => await login(values)}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username' }]}
          >
            <Input placeHolder="admin@email.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input.Password placeHolder="12345678" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center' }}>
          <Link to="/">
            <Button type="link">
              Go Home <HomeOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}