import classNames from 'classnames/bind';
import styles from './exhibition.module.scss';

const cx = classNames.bind(styles);

interface ExhibitionProps {
  children: JSX.Element;
}

const Exhibition = ({children}: ExhibitionProps) => {
  return (
    <main className={cx('main', 'exhibition')}>
      <div className={cx('exhibition__container')}>{children}</div>
    </main>
  );
};

export default Exhibition;
