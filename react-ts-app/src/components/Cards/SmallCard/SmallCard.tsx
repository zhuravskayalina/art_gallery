import React, { Component } from 'react';
import styles from './small-card.module.scss';
import Like from '../../Like/Like';

interface SmallCardProps {
  name: string;
  author: string;
  image: string;
  info: string;
}

class SmallCard extends Component<SmallCardProps> {
  render() {
    const { name, author, image, info } = this.props;
    return (
      <div className={styles.smallCard}>
        <img src={image} alt={`${name} by ${author}`} className={styles.smallCardImage} />
        <div className={styles.smallCardInfoBox}>
          <div className={styles.smallCardInfo}>
            <p className={styles.smallCardName}>{name}</p>
            <p className={styles.smallCardAuthor}>{author}</p>
            <p className={styles.smallCardDetails}>{info}</p>
          </div>
          <Like />
        </div>
      </div>
    );
  }
}

export default SmallCard;
