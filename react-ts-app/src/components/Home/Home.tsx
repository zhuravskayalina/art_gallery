import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';
import styles from './home.module.scss';

class Home extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <section className={styles.mainContainer}>
          <h1 className={styles.mainHeading}>Featured Paintings</h1>
          <div className={styles.searchBar}>
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
