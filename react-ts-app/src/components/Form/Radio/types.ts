import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../types';

export interface RadioProps {
  value: string;
  title: string;
  register: UseFormRegister<FormValues>;
}
