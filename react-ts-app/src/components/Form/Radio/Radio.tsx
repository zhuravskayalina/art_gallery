import React, { forwardRef } from 'react';
import { RadioProps } from './types';

const Radio = forwardRef<HTMLInputElement, RadioProps>(({ name, value, title }, ref) => (
  <>
    <input type="radio" name={name} id={value} ref={ref} />
    <label htmlFor={value}>{title}</label>
  </>
));

export default Radio;
