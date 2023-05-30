import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../types';

export interface CheckboxProps {
  label: string;
  register: UseFormRegister<FormValues>;
  validate: () => boolean | string;
}
