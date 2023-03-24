import React, { forwardRef } from 'react';
import { FileUploadProps } from './types';

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>((props, ref) => (
  <label>
    <input type="file" name="file" onChange={props.handleFileUpload} ref={ref} />
  </label>
));

export default FileUpload;