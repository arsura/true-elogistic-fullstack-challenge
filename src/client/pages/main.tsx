import React from 'react';

interface AppProps {
  compiler: string;
  framework: string;
}

export default function(props: AppProps) {
  return (
    <div>
      <h1>
        Hello from {props.compiler} and {props.framework}!
      </h1>
      <p>My first time with React & Typescript!!</p>
    </div>
  );
}