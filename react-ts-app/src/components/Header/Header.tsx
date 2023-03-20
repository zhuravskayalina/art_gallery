import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import styles from './header.module.scss';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { HeaderProps, HeaderState, NavigationItem } from './types';

const navItems: NavigationItem[] = [
  {
    url: '',
    title: 'home',
  },
  {
    url: 'about',
    title: 'about us',
  },
];

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderState) {
    super(props);

    this.state = {
      pageName: 'home',
    };
  }

  private showCurrentPageName = (pageName: string) => {
    this.setState({
      pageName,
    });
  };

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <Logo />
            <span>cultured kid.</span>
          </Link>
          <p>{`It's "${this.state.pageName}" page`}</p>
          <Navigation items={navItems} showCurrentPageName={this.showCurrentPageName} />
        </div>
      </header>
    );
  }
}

export default Header;
