/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from './modal.module.scss';
import { ModalProps } from './types';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

const cx = classNames.bind(styles);

const Modal = ({ active, setActive, children, handleCloseCard }: ModalProps) => {
  useEffect(() =>
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && active) {
        setActive(false);
      }
    })
  );

  const closeModal = () => {
    setActive(false);
    if (handleCloseCard) {
      handleCloseCard();
    }
  };

  return (
    <div className={cx('modal', { modal_open: active })} onClick={closeModal}>
      <div className={cx('modal__container')} onClick={(e) => e.stopPropagation()}>
        <button className={cx('close')} onClick={() => setActive(false)}>
          <CloseIcon className={cx('close-icon')} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
