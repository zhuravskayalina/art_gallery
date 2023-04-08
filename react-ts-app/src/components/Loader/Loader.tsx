import classNames from 'classnames/bind';
import styles from './loader.module.scss';

const cx = classNames.bind(styles);

const Loader = () => {
  return <span className={cx('loader')} />;
};

export default Loader;
