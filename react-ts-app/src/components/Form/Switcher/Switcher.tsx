import classNames from 'classnames/bind';
import { UseFormRegister } from 'react-hook-form';
import styles from './switcher.module.scss';
import { FormValues } from '../types';

const cx = classNames.bind(styles);

interface SwitcherProps {
  register: UseFormRegister<FormValues>;
}

const Switcher = ({ register }: SwitcherProps) => {
  return (
    <label className={cx('switch')}>
      <input type="checkbox" className={cx('switch__input')} {...register('isAnonymously')} />
      <span className={cx('switch__slider')} />
    </label>
  );
};

export default Switcher;
