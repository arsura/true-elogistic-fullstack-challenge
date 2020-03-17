import React from 'react';
import { Route, Router } from 'react-router-dom';
import { history } from '../redux/store';

import About from '../pages/about';
import Hello from '../pages/main';
import Product from '../pages/product';
import Login from '../pages/login';

export default function() {
  return (
    <Router history={history}>
      <Route path="/" component={Hello} exact />
      <Route path="/about" component={About} />
      <Route path="/product" component={Product} />
      <Route path="/login" component={Login} />
    </Router>
  );
}