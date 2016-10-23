import React from 'react';
import { render } from 'react-dom';
import ProgressBar from 'Components/ProgressBar';

const App = () => (
  <div>
    <ProgressBar />
  </div>
);

const ROOT = document.getElementById('app');

render(
  <App />,
  ROOT
);
