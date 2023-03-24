import { ChangeEvent } from 'react';

export interface FileUploadProps {
  handleFileUpload: (event: ChangeEvent<HTMLInputElement>) => void;
}
