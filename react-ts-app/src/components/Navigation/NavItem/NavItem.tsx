import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav-item.module.scss';
import { NavItemProps } from './types';

class NavItem extends React.Component<NavItemProps> {
  render() {
    const { title, url } = this.props;

    return (
      <li className={styles.navItem}>
        <NavLink
          to={`${url}`}
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
          }
        >
          {title}
        </NavLink>
      </li>
    );
  }
}

export default NavItem;
