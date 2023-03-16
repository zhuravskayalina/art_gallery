import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './navigation.module.scss';

const items = [
  {
    url: '',
    title: 'home',
  },
  {
    url: 'about',
    title: 'about us',
  },
];

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className={styles.navigationList}>
          {items.map((item) => (
            <NavItem title={item.title} url={item.url} key={item.title} />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
