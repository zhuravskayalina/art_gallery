import { Path, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../types';

export type InputProps = {
  type: 'text' | 'email';
  name: Path<FormValues>;
  label: string;
  register: UseFormRegister<FormValues>;
};
