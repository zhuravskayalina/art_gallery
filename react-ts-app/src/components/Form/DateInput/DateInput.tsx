import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { DateProps } from './types';
import styles from './date.module.scss';

const cx = classNames.bind(styles);

const DateInput = forwardRef<HTMLInputElement, DateProps>((props, ref) => (
  <input
    type="date"
    ref={ref}
    onChange={props.validateDate}
    className={cx('date')}
    data-testid="dateInput"
  />
));

export default DateInput;
