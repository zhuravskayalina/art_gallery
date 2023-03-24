import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Navigation from '../Navigation/Navigation';
import styles from './header.module.scss';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { HeaderProps, HeaderState, NavigationItem } from './types';

const cx = classNames.bind(styles);

const navItems: NavigationItem[] = [
  {
    url: '',
    title: 'home',
  },
  {
    url: 'about',
    title: 'about us',
  },
  {
    url: 'feedback',
    title: 'feedback',
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
      <header className={cx('header')}>
        <div className={cx('header__container')}>
          <Link to="/" className={cx('header__logo')}>
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
