import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './big-card.module.scss';
import { Character } from '../../../../APIClient/types';

const cx = classNames.bind(styles);

interface BigCardProps {
  character: Character;
}

const BigCard = ({
  character: { name, gender, image, status, species, location, origin, type },
}: BigCardProps) => {
  return (
    <div className={cx('container')}>
      <img src={image} alt="character" className={cx('image')} />
      <ul className={cx('info')}>
        <li className={cx('info__item', 'info__name')}>{name}</li>
        <li className={cx('info__item', 'info__status')}>{status}</li>
        <li className={cx('info__item')}>
          <span className={cx('accent')}>Species:</span> {species}
        </li>
        <li className={cx('info__item')}>
          <span className={cx('accent')}>Location:</span> {location.name}
        </li>
        <li className={cx('info__item')}>
          <span className={cx('accent')}>Origin:</span> {origin.name}
        </li>
        {type && (
          <li className={cx('info__item')}>
            <span className={cx('accent')}>Type:</span> {type}
          </li>
        )}
        <li className={cx('info__item')}>
          <span className={cx('accent')}>Gender:</span> {gender}
        </li>
      </ul>
    </div>
  );
};

export default BigCard;
