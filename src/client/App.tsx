import React from 'react';
import { hot } from 'react-hot-loader/root';

interface AppProps {
  compiler: string;
  framework: string;
}

const App = (props: AppProps) => (
  <div>
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
    <p>My first time with React & Typescript!!</p>
  </div>
);

export default hot(App);
