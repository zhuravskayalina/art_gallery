import classNames from 'classnames/bind';
import styles from './cards-rm.module.scss';
import { Character } from '../../../../APIClient/types';
import SmallCard from '../SmallCard/SmallCard';

const cx = classNames.bind(styles);

interface CardsProps {
  characters: Character[];
  openCard: (id: number) => void;
}

const Cards = ({ characters, openCard }: CardsProps) => {
  return (
    <section className={cx('characters')} data-testid="rm-cards" data-test="rm-cards">
      <ul className={cx('list')}>
        {characters.map((character) => (
          <SmallCard character={character} key={character.id} openCard={openCard} />
        ))}
      </ul>
    </section>
  );
};

export default Cards;
