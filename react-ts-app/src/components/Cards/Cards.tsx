import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './cards.module.scss';
import SmallCard from './SmallCard/SmallCard';
import { CardsProps } from './types';

const cx = classNames.bind(styles);

class Cards extends Component<CardsProps> {
  render() {
    return (
      <section className={cx('cards')}>
        <div className={cx('cards__container')} data-testid="cards">
          {this.props.paintings.map((painting) => (
            <SmallCard
              key={painting.id}
              name={painting.name}
              image={painting.image}
              author={painting.author}
              info={painting.info}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Cards;
