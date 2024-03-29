import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Navigation from '../Navigation/Navigation';
import styles from './header.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { NavigationItem } from './types';

const cx = classNames.bind(styles);

const navItems: NavigationItem[] = [
  {
    url: '',
    title: 'home',
  },
  {
    url: 'exhibitions',
    title: 'exhibitions',
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

function Header() {
  return (
    <header className={cx('header')} data-test="header">
      <div className={cx('header__container')}>
        <Link to="/" className={cx('header__logo')} aria-label="cultured kid.">
          <Logo />
          <span>cultured kid.</span>
        </Link>
        <Navigation items={navItems} />
      </div>
    </header>
  );
}

export default Header;
