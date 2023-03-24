import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './card.module.scss';
import { CardProps } from './types';

const cx = classNames.bind(styles);

class Card extends Component<CardProps> {
  render() {
    const {
      userName,
      feedback,
      favouriteArtwork,
      visitDate,
      photo,
      whatLikeAboutGallery,
      isWantPostcard,
      isAnonymously,
    } = this.props.card;

    const name = isAnonymously ? 'Our Guest' : userName;
    return (
      <div className={cx('card')}>
        <p className={cx('card__heading')}>Feedback from {name}</p>
        <div className={cx('card__info')}>
          <p className={cx('card__visit-date')}>Was at Cultured Kid Gallery {visitDate}</p>
          <p>
            <span>{name} favourite artwork: </span>
            <span className={cx('card__artwork')}>{favouriteArtwork}</span>
          </p>
        </div>
        <img src={photo} alt="shared impression" className={cx('card__photo')} />
        <p className={cx('card__feedback')}>{feedback}</p>
        <div className={cx('notes')}>
          <p className={cx('notes__heading')}>What {name} likes about gallery:</p>
          <ul className={cx('notes-list')}>
            {whatLikeAboutGallery.map((item) => (
              <li key={item} className={cx('notes-list__item')}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {isWantPostcard && (
          <p className={cx('postcard')}>
            {name} has got our postcard! Do you want one? Leave a feedback!
          </p>
        )}
      </div>
    );
  }
}

export default Card;
