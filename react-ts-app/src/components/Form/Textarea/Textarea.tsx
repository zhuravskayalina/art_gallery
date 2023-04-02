import classNames from 'classnames/bind';
import { UseFormRegister } from 'react-hook-form';
import styles from './textarea.module.scss';
import { FormValues } from '../types';

const cx = classNames.bind(styles);

interface TextareaProps {
  register: UseFormRegister<FormValues>;
}

const Textarea = ({ register }: TextareaProps) => {
  return (
    <>
      <label htmlFor="textarea">Write a comment:</label>
      <textarea
        id="textarea"
        className={cx('textarea')}
        {...register('feedback', {
          required: true,
          minLength: 10,
        })}
      />
    </>
  );
};

export default Textarea;
