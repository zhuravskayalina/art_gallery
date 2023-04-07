import { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './footer.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const cx = classNames.bind(styles);

class Footer extends Component {
  render() {
    return (
      <footer className={cx('footer')}>
        <div className={cx('footer__container')}>
          <Logo className={cx('footer__logo')} />
          <Link to="https://github.com/zhuravskayalina" className={styles.footer__author}>
            Anhelina Zhurauskaya
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
