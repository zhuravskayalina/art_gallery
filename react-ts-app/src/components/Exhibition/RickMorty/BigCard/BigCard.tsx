import classNames from 'classnames/bind';
import styles from './big-card.module.scss';
import { useGetCharacterByIdQuery } from '../../../../redux/api/apiSlice';
import Loader from '../../../Loader/Loader';

const cx = classNames.bind(styles);

interface BigCardProps {
  characterId: number | undefined;
}

const BigCard = ({ characterId }: BigCardProps) => {
  const { data: character, isFetching, isSuccess } = useGetCharacterByIdQuery(characterId || 0);

  return (
    <div className={cx('container')}>
      {isFetching && <Loader />}
      {isSuccess && (
        <>
          <img src={character.image} alt="character" className={cx('image')} />
          <ul className={cx('info')}>
            <li className={cx('info__item', 'info__name')}>{character.name}</li>
            <li className={cx('info__item', 'info__status')}>{character.status}</li>
            <li className={cx('info__item')}>
              <span className={cx('accent')}>Species:</span> {character.species}
            </li>
            <li className={cx('info__item')}>
              <span className={cx('accent')}>Location:</span> {character.location.name}
            </li>
            <li className={cx('info__item')}>
              <span className={cx('accent')}>Origin:</span> {character.origin.name}
            </li>
            {character.type && (
              <li className={cx('info__item')}>
                <span className={cx('accent')}>Type:</span> {character.type}
              </li>
            )}
            <li className={cx('info__item')}>
              <span className={cx('accent')}>Gender:</span> {character.gender}
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default BigCard;
