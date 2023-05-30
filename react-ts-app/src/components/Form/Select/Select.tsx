import classNames from 'classnames/bind';
import { UseFormRegister } from 'react-hook-form';
import styles from './select.module.scss';
import dataBase from '../../../db/dataBase';
import { FormValues } from '../types';

const cx = classNames.bind(styles);

interface SelectProps {
  register: UseFormRegister<FormValues>;
}

const Select = ({ register }: SelectProps) => {
  return (
    <>
      <label htmlFor="selectArt">Most impressive art work:</label>
      <select
        id="selectArt"
        className={cx('select')}
        {...register('favouriteArtwork', { required: true })}
      >
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <option className="option" value="" />
        {dataBase.map(({ name, author, id }) => (
          <option value={name} key={id}>
            {`"${name}" ${author}`}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
