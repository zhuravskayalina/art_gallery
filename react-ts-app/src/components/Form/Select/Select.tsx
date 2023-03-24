/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import dataBase from '../../../db/dataBase';
import { SelectProps } from './types';
import styles from './select.module.scss';

const cx = classNames.bind(styles);

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <select onChange={props.validateChosenArtwork} ref={ref} className={cx('select')}>
    <option className="option" value="" />
    {dataBase.map(({ name, author, id }) => (
      <option value={`"${name}" ${author}`} key={id}>
        {`"${name}" ${author}`}
      </option>
    ))}
  </select>
));

export default Select;
