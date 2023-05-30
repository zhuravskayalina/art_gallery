import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../types';

export interface FileUploadProps {
  register: UseFormRegister<FormValues>;
}
