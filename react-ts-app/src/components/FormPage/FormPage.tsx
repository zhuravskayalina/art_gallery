import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './form-page.module.scss';
import Form from '../Form/Form';
import { CardData } from '../Form/types';
import FormCards from '../Form/FormCards/FormCards';

const cx = classNames.bind(styles);

const FormPage = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  return (
    <main className={cx('main')}>
      <div className={cx('main__container')}>
        <h2 className={cx('main__heading')}>
          Tell us about your experience at Cultured Kid Gallery:
        </h2>
        <Form setCards={setCards} />
        {cards && <FormCards cards={cards} />}
      </div>
    </main>
  );
};

export default FormPage;
