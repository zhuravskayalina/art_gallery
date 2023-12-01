import classNames from 'classnames/bind';
import styles from './small-card-rm.module.scss';
import { Character } from '../../../../APIClient/types';

const cx = classNames.bind(styles);

interface SmallCardProps {
  character: Character;
  openCard: (id: number) => void;
}

const SmallCard = ({ character: { name, image, id }, openCard }: SmallCardProps) => {
  return (
    <li className={cx('small-card')}>
      <button
        className={cx('small-card__button')}
        onClick={() => openCard(id)}
        aria-label="Open card"
      >
        <img src={image} alt="character" className={cx('small-card__image')} />
        <p className={cx('small-card__name')}>{name}</p>
      </button>
    </li>
  );
};

export default SmallCard;
