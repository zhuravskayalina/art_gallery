import React from 'react';
import classNames from 'classnames/bind';
import { CheckboxProps } from './types';
import styles from './checkbox.module.scss';

const cx = classNames.bind(styles);

const Checkbox = ({ label, register, validate }: CheckboxProps) => {
  return (
    <label className={cx('checkbox')}>
      {label}
      <input
        type="checkbox"
        value={label}
        {...register('likeCheckboxes', {
          validate,
        })}
      />
    </label>
  );
};

export default Checkbox;
