import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { CheckboxProps } from './types';
import styles from './checkbox.module.scss';

const cx = classNames.bind(styles);

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, name }, ref) => (
  <label className={cx('checkbox')}>
    {label}
    <input type="checkbox" name={name} ref={ref} />
  </label>
));

export default Checkbox;
