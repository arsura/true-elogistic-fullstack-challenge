import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import Router from './routes';

const App = hot(Router);

ReactDOM.render(<App />, document.getElementById('root'));
