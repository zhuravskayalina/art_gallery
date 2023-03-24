import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';
import { ModalProps } from './types';

const cx = classNames.bind(styles);

class Modal extends Component<ModalProps> {
  render() {
    return (
      <div className={cx('modal', { modal_open: this.props.showModal })}>
        <div className={cx('modal__container')}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
