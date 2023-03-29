import React from 'react';
import { RadioProps } from './types';

const Radio = ({ title, value, register }: RadioProps) => {
  return (
    <>
      <input
        type="radio"
        id={value}
        {...register('isWantPostcard', { required: true })}
        value={value}
      />
      <label htmlFor={value}>{title}</label>
    </>
  );
};

export default Radio;
