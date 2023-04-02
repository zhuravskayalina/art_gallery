import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav-item.module.scss';
import { NavItemProps } from './types';

class NavItem extends Component<NavItemProps> {
  render() {
    const { title, url, showCurrentPageName } = this.props;

    return (
      <li className={styles.navItem}>
        <NavLink
          to={`${url}`}
          onClick={() => showCurrentPageName(title)}
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
