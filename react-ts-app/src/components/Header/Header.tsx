import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './header.module.scss';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo />
            <span>cultured kid.</span>
          </div>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
