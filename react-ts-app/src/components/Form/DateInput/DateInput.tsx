import classNames from 'classnames/bind';
import styles from './date.module.scss';
import { DateProps } from './types';
import dateClient from '../../../DateClient/DateClient';

const cx = classNames.bind(styles);

const DateInput = ({ register }: DateProps) => {
  return (
    <input
      type="date"
      data-test="form-date-input"
      className={cx('date')}
      data-testid="dateInput"
      {...register('visitDate', {
        required: true,
        valueAsDate: true,
        validate: (date) => {
          return dateClient.formatDateToNumber(date) < Date.now() || `Pick correct date`;
        },
      })}
    />
  );
};

export default DateInput;
