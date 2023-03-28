import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg';
import styles from './like.module.scss';

const cx = classNames.bind(styles);

function Like() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className={cx('like')}>
      <button
        type="button"
        className={cx('button', { button_liked: isLiked })}
        onClick={handleLike}
        data-liked={isLiked}
      >
        <LikeIcon className={cx('button__icon', { button__icon_liked: isLiked })} />
      </button>
    </div>
  );
}

export default Like;
