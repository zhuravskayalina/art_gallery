import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './cards.module.scss';
import SmallCard from './SmallCard/SmallCard';
import paintings from '../../db/dataBase';

const cx = classNames.bind(styles);

class Cards extends Component {
  render() {
    return (
      <section className={cx('cards')}>
        <div className={cx('cards__container')}>
          {paintings.map((painting) => (
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
