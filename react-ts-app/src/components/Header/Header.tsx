import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import styles from './header.module.scss';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <Logo />
            <span>cultured kid.</span>
          </Link>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
