import React from 'react';
import { render } from 'react-dom';
import ProgressBar from 'Components/ProgressBar';

const App = () => (
  <div style={{ marginTop: 20 }}>
    <ProgressBar
      percent={50}
      autoIncrement
      intervalTime={200}
      spinner={'right'}
    />
  </div>
);

const ROOT = document.getElementById('app');

render(
  <App />,
  ROOT
);
