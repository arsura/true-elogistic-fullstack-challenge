import React, { Fragment, useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const TextArea = Input.TextArea;

const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  }
};

const tailLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 18, offset: 6 } }
};

function ProductCreationModalForm(props) {
  const [visible, setVisible] = useState(false);

  function onFinish(values) {
    props.addProduct(values);
    setVisible(false);
  }

  return (
    <Fragment>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setVisible(true)}
        style={{ marginBottom: 16 }}
      >
        Add Product
      </Button>
      <Modal
        title="Add Product"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        closable={true}
      >
        <Form {...layout} onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input product name!'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: 'Please input product price!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
}

ProductCreationModalForm.propTypes = {
  addProduct: PropTypes.func.isRequired
};

function ProductUpdateModalForm(props) {
  const [visible, setVisible] = useState(false);

  function onFinish(values) {
    props.updateProduct(values);
    setVisible(false);
  }

  return (
    <Fragment>
      <Button
        type="default"
        onClick={() => setVisible(true)}
        style={{ marginRight: 8, marginBottom: 8, minWidth: 70 }}
      >
        Edit
      </Button>
      <Modal
        title={`${props.data.id}: ${props.data.name}`}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        closable={true}
      >
        <Form {...layout} onFinish={onFinish} initialValues={props.data}>
          <Form.Item label="ID" name="id" required>
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input product name'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: 'Please input product price'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea autoSize />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
}

ProductUpdateModalForm.propTypes = {
  updateProduct: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export { ProductCreationModalForm, ProductUpdateModalForm };