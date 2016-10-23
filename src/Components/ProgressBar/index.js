import React from 'react';
import classnames from 'classnames';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.defaultProps = {
      percent: -1,
      onTop: false,
      autoIncrement: false,
      intervalTime: 200,
      spinner: 'left',
    };

    this.state = {
      percent: this.props.percent,
    };

    this.increment = this.increment.bind(this);
    this.handleProps = this.handleProps.bind(this);
  }

  componentDidMount() {
    this.handleProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.handleProps(nextProps);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  increment() {
    let { percent } = this.state;
    percent += ((Math.random() + 1) - Math.random());
    percent = (percent < 99) ? percent : 99;
    this.setState({
      percent,
    });
  }

  handleProps(props) {
    if (props.autoIncrement && props.percent >= 0 && props.percent < 99) {
      this.interval = setInterval(this.increment, props.intervalTime);
    }

    if (props.percent >= 100) {
      this.setState({
        percent: 99.9,
      }, () => {
        this.timeout = setTimeout(() => {
          this.setState({
            percent: -1,
          });
        }, 400);
      });
    } else {
      this.setState({
        percent: props.percent,
      });
    }
  }

  render() {
    const { onTop, spinner } = this.props;
    let { className } = this.props;
    const { percent } = this.state;
    className = classnames('react-progress-bar', className, {
      'react-progress-bar-on-top': onTop,
      'react-progress-bar-hide': percent < 0 || percent >= 100,
    });
    const style = { width: `${percent < 0 ? 0 : percent}%` };
    const spinnerClassName = classnames('react-progress-bar-spinner', {
      [`react-progress-bar-spinner-${spinner}`]: spinner,
    });
    return (
      <div className={className}>
        <div className="react-progress-bar-percent" style={style} />
        {
          spinner ?
            <div className={spinnerClassName}>
              <div className="react-progress-bar-spinner-icon" />
            </div>
            : null
        }
      </div>
    );
  }
}

ProgressBar.propTypes = {
  className: React.PropTypes.string,
  percent: React.PropTypes.number.isRequired,
  onTop: React.PropTypes.bool,
  autoIncrement: React.PropTypes.bool,
  intervalTime: React.PropTypes.number,
  spinner: React.PropTypes.oneOf([false, 'left', 'right']),
};

export default ProgressBar;
