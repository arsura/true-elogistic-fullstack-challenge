import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import configureStore, { history } from '../client/redux/store';
import setUser from './helpers/setUser';
import setToken from './helpers/setToken';

const store = configureStore();
setUser(store.dispatch);
setToken(localStorage.token);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);