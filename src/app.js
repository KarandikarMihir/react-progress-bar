import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>Hello, React!</div>
  );
};

const ROOT = document.getElementById('app');

render(
  <App />,
  ROOT
);
