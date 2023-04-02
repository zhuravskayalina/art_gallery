import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { ButtonProps } from './types';

const cx = classNames.bind(styles);

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button type={this.props.type} className={cx('button')}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
