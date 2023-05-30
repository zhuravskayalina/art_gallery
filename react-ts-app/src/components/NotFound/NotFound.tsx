import { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './not-found.module.scss';

const cx = classNames.bind(styles);

class NotFound extends Component {
  render() {
    return (
      <div className={cx('main')} data-test="not-found">
        <div className={cx('text')}>
          <h2 className={cx('main__heading')}>Oops..</h2>
          <h3>Page not found</h3>
          <p className={cx('text__details')}>Page you are looking for does not exist. </p>
          <Link to="/" />
        </div>
        <div className={cx('image')} />
      </div>
    );
  }
}

export default NotFound;
