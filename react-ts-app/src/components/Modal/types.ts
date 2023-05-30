import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ModalProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  handleCloseCard?: () => void;
}
