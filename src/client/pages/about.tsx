import React from 'react';
import About from '../components/About';
import DefaultLayout from '../layouts/default';

export default function() {
  return (
    <div className="container">
      <DefaultLayout>
        <About />
      </DefaultLayout>
    </div>
  );
}
