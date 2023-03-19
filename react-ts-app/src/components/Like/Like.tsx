import React, { Component } from 'react';
import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg';
import styles from './like.module.scss';

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
      <div className={styles.like}>
        <button
          type="button"
          className={isLiked ? 'btn-liked' : styles.like__btn}
          onClick={this.handleLike}
          aria-describedby="like-button"
        >
          <LikeIcon
            className={
              isLiked ? `${styles.like__icon_liked} ${styles.like__icon}` : styles.like__icon
            }
          />
        </button>
      </div>
    );
  }
}

export default Like;
