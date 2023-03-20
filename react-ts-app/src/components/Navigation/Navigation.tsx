import React from 'react';
import styles from './navigation.module.scss';
import NavItem from './NavItem/NavItem';
import { NavigationProps } from './types';

class Navigation extends React.Component<NavigationProps> {
  render() {
    const { items, showCurrentPageName } = this.props;
    return (
      <nav>
        <ul className={styles.navigationList}>
          {items.map((item) => (
            <NavItem
              title={item.title}
              url={item.url}
              key={item.title}
              showCurrentPageName={showCurrentPageName}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
