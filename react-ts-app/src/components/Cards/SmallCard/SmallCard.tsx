import classNames from 'classnames/bind';
import styles from './small-card.module.scss';
import { SmallCardProps } from './types';

const cx = classNames.bind(styles);

function SmallCard({ name, author, info, image }: SmallCardProps) {
  return (
    <div className={cx('small-card')} data-testid="smallCard">
      <img src={image} alt={`${name} by ${author}`} className={cx('small-card__image')} />
      <div className={cx('small-card__info-box')}>
        <div className={cx('small-card__info')}>
          <p className={cx('small-card__name')}>{name}</p>
          <p className={cx('small-card__author')}>{author}</p>
          <p className={cx('small-card__details')}>{info}</p>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
