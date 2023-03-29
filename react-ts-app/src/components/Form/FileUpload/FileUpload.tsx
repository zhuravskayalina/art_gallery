import React from 'react';
import { FileUploadProps } from './types';

const FileUpload = ({ register }: FileUploadProps) => {
  return (
    <label>
      <input
        type="file"
        accept="image/*"
        data-testid="fileInput"
        {...register('photo', {
          required: true,
        })}
      />
    </label>
  );
};
export default FileUpload;
