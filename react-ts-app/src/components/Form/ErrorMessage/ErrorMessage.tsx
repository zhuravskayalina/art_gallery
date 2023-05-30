import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './error-message.module.scss';

const cx = classNames.bind(styles);

interface ErrorMessageProps {
  text: string;
}

class ErrorMessage extends Component<ErrorMessageProps> {
  render() {
    return <p className={cx('error')}>{this.props.text}</p>;
  }
}

export default ErrorMessage;
