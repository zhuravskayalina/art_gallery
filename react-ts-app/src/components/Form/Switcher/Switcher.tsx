import React, { forwardRef } from 'react';
import styles from './switcher.module.scss';

const Switcher = forwardRef<HTMLInputElement>((props, ref) => (
  <label className={styles.switch}>
    <input type="checkbox" className={styles.switch__input} ref={ref} />
    <span className={styles.switch__slider} />
  </label>
));

export default Switcher;
