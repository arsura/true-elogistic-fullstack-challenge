import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultLayout from '../layouts/default';
import ProductTable from '../components/ProductTable';
import { ProductCreationModalForm } from '../components/ProductActions';

export default function() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const products = await axios.get('/api/product');
    setProducts(products.data.data);
  }

  async function addProduct(product) {
    await axios.post('/api/product', product);
    getProducts();
  }

  async function updateProduct(product) {
    await axios.put('/api/product', product);
    getProducts();
  }

  async function removeProduct(id) {
    await axios.delete(`/api/product/${id}`);
    getProducts();
  }

  return (
    <DefaultLayout>
      <ProductCreationModalForm addProduct={addProduct} />
      <ProductTable
        data={products}
        removeProduct={removeProduct}
        updateProduct={updateProduct}
      />
    </DefaultLayout>
  );
}