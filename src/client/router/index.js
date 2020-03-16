import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import About from '../pages/about';
import Hello from '../pages/main';
import Product from '../pages/product';

const history = createBrowserHistory();

export default function() {
  return (
    <Router history={history}>
      <Route path="/" component={Hello} exact />
      <Route path="/about" component={About} />
      <Route path="/product" component={Product} />
    </Router>
  );
}