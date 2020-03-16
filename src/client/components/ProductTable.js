import React from 'react';
import { Table, Button } from 'antd';
import PropTypes from 'prop-types';

const { Column } = Table;

function ProductTable(props) {
  return (
    <Table rowKey="id" dataSource={props.data}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Price" dataIndex="price" key="price" />
      <Column title="Description" dataIndex="description" key="description" />
      <Column
        title=""
        key="action"
        render={(text, record) => (
          <span>
            <Button style={{ marginRight: 8 }}>Edit {record.lastName}</Button>
            <Button type="danger">Delete</Button>
          </span>
        )}
      />
    </Table>
  );
}

ProductTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string
    })
  ).isRequired
};

export default ProductTable;
