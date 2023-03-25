import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './form-page.module.scss';
import Form from '../Form/Form';

const cx = classNames.bind(styles);

class FormPage extends Component {
  render() {
    return (
      <main className={cx('main')}>
        <div className={cx('main__container')}>
          <h2 className={cx('main__heading')}>
            Tell us about your experience at Cultured Kid Gallery:
          </h2>
          <Form />
        </div>
      </main>
    );
  }
}

export default FormPage;
