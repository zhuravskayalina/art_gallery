import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './nav-item.module.scss';
import { NavItemProps } from './types';

const cx = classNames.bind(styles);

class NavItem extends Component<NavItemProps> {
  render() {
    const { title, url, showCurrentPageName } = this.props;

    return (
      <li>
        <NavLink
          to={`${url}`}
          onClick={() => showCurrentPageName(title)}
          className={({ isActive }) => cx('nav-link', { 'nav-link_active': isActive })}
        >
          {title}
        </NavLink>
      </li>
    );
  }
}

export default NavItem;
