import React from 'react';
import classNames from 'classnames/bind';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';
import styles from './home.module.scss';

const cx = classNames.bind(styles);

class Home extends React.Component {
  render() {
    return (
      <main className={cx('main')}>
        <section className={cx('main__container')}>
          <h1 className={cx('main__heading')}>Featured Paintings</h1>
          <div className={cx('main__searchbar')}>
            <p>Looking for something special?</p>
            <SearchBar />
          </div>
          <Cards />
        </section>
      </main>
    );
  }
}

export default Home;
