import classNames from 'classnames/bind';
import styles from './input.module.scss';
import { InputProps } from './types';

const cx = classNames.bind(styles);

const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Input = ({ label, name, register, type }: InputProps) => (
  <label className={cx('label')}>
    <span className={cx('label__title')}>{label}</span>:
    <input
      type={type}
      data-test={`form-input-${name}`}
      className={cx('input')}
      {...register(name, {
        required: true,
        minLength: 2,
        pattern: type === 'email' ? emailReg : /^[A-Za-z]+$/i,
      })}
    />
  </label>
);
export default Input;
