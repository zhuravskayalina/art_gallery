import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import { ReactComponent as Logo } from '../../../public/logo.svg';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <Logo className={styles.footer__logo} />
          <Link to="https://github.com/zhuravskayalina" className={styles.footer__author}>
            Anhelina Zhurauskaya
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
