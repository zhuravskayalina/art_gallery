import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './not-found.module.scss';

class NotFound extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.text}>
          <h2 className={styles.main__heading}>Oops..</h2>
          <h3>Page not found</h3>
          <p className={styles.text__details}>Page you are looking for does not exist. </p>
          <Link to="/" />
        </div>
        <div className={styles.image} />
      </div>
    );
  }
}

export default NotFound;
