import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './input.module.scss';
import { InputProps } from './types';

const cx = classNames.bind(styles);

const Input = forwardRef<HTMLInputElement, InputProps>(({ name, label, type }, ref) => (
  <label className={cx('label')}>
    <span className={cx('label__title')}>{label}</span>:
    <input name={name} className={cx('input')} type={type} ref={ref} />
  </label>
));

export default Input;
