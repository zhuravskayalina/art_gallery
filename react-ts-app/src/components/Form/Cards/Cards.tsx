import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Card from '../Card/Card';
import styles from './cards.module.scss';
import { CardsProps } from './types';

const cx = classNames.bind(styles);

class Cards extends Component<CardsProps> {
  render() {
    return (
      <>
        <h3 className={cx('cards__heading')}>Feedbacks from our guests:</h3>
        <div className={cx('cards')}>
          {this.props.cards.map((card) => (
            <Card card={card} key={card.userName} />
          ))}
        </div>
      </>
    );
  }
}

export default Cards;
