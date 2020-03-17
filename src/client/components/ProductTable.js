import React from 'react';
import { Table, Button } from 'antd';
import PropTypes from 'prop-types';
import { ProductUpdateModalForm } from './ProductActions';

const { Column } = Table;

function ProductTable(props) {
  return (
    <Table rowKey="id" dataSource={props.data}>
      <Column title="ID" dataIndex="id" key="id" width={'5%'} />
      <Column title="Name" dataIndex="name" key="name" width={'30%'} />
      <Column
        title="Price"
        dataIndex="price"
        key="price"
        width={'10%'}
        render={price => <span>{price.toLocaleString()}</span>}
      />
      <Column
        title="Description"
        dataIndex="description"
        key="description"
        width={'40%'}
      />
      <Column
        title=""
        key="action"
        width={'15%'}
        render={(_, record) => (
          <span>
            <ProductUpdateModalForm
              updateProduct={props.updateProduct}
              data={record}
            />
            <Button
              style={{ marginRight: 8, marginBottom: 8, minWidth: 70 }}
              type="danger"
              onClick={async () => await props.removeProduct(record.id)}
            >
              Delete
            </Button>
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
  ).isRequired,
  removeProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired
};

export default ProductTable;