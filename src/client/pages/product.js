import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultLayout from '../layouts/default';
import ProductTable from '../components/ProductTable';
import { ProductCreationModal } from '../components/ProductActions';

export default function() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const products = await axios.get('/api/product');
    setProducts(products.data.data);
  }

  return (
    <DefaultLayout>
      <ProductCreationModal />
      <ProductTable data={products} />
    </DefaultLayout>
  );
}
