import classNames from 'classnames/bind';
import FormCard from '../FormCard/FormCard';
import styles from './cards.module.scss';
import { CardsProps } from './types';

const cx = classNames.bind(styles);

const FormCards = ({ cards }: CardsProps) => {
  return (
    <>
      <h3 className={cx('cards__heading')}>Feedbacks from our guests:</h3>
      <div className={cx('cards')}>
        {cards.map((card) => (
          <FormCard card={card} key={card.id} />
        ))}
      </div>
    </>
  );
};

export default FormCards;
