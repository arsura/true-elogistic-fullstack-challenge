import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../client/redux/store';
import { hot } from 'react-hot-loader/root';
import Router from './routes';
import './App.css';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  );
}

export default hot(App);