import React, { Component } from 'react';
import styles from './cards.module.scss';
import SmallCard from './SmallCard/SmallCard';
import paintings from '../../db/dataBase';

class Cards extends Component {
  render() {
    return (
      <section className={styles.cards}>
        <div className={styles.cardsContainer}>
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
