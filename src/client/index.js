import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from '../client/redux/store';
import setUser from './helpers/setUser';
import setToken from './helpers/setToken';

const store = configureStore();
setUser(store.dispatch);
setToken(localStorage.token);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);