import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';

const TextArea = Input.TextArea;

const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};

function ProductCreationForm(props) {
  return (
    <Form {...layout}>
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
    </Form>
  );
}

function ProductCreationModal(props) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)} style={{ margin: '8px 0' }}>
        Add New Product
      </Button>
      <Modal
        title="Add New Product"
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        closable={true}
      >
        <ProductCreationForm />
      </Modal>
    </div>
  );
}

export { ProductCreationForm, ProductCreationModal };
