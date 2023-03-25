import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg';
import styles from './like.module.scss';

const cx = classNames.bind(styles);

interface LikeProps {}

type LikeState = {
  isLiked: boolean;
};

class Like extends Component<LikeProps, LikeState> {
  constructor(props: LikeProps) {
    super(props);

    this.state = { isLiked: false };
  }

  private handleLike = () => {
    if (this.state.isLiked) {
      this.setState({ isLiked: false });
    } else {
      this.setState({ isLiked: true });
    }
  };

  render() {
    const { isLiked } = this.state;
    return (
      <div className={cx('like')}>
        <button
          type="button"
          className={cx('button', { button_liked: isLiked })}
          onClick={this.handleLike}
          data-liked={isLiked}
        >
          <LikeIcon className={cx('button__icon', { button__icon_liked: isLiked })} />
        </button>
      </div>
    );
  }
}

export default Like;
