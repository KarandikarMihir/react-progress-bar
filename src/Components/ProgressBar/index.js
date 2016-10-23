import React from 'react';
import styles from './styles.css';

class ProgressBar extends React.Component {
  render() {
    return (
      <div className={styles.prefix}>{'Component: <ProgressBar />'}</div>
    )
  }
}

export default ProgressBar;
