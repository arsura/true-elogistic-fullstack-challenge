import React from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Form, Input, Button, Typography, message } from 'antd';
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

  async function onFinish(values) {
    await login(values);
  }

  async function login(account) {
    try {
      const res = await axios.post('/api/auth', account);
      const user = jwtDecode(res.data.token);
      setToken(res.data.token);
      dispatch(auth.loginSucceeded(user));
      dispatch(push('/'));
    } catch (e) {
      dispatch(auth.loginFailed(e.response.data));
      message.error(e.response.data.message);
    }
  }

  return (
    <div className="container--center">
      <div>
        <Title style={{ textAlign: 'center' }}>Login</Title>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}