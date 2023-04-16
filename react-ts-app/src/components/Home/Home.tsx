import classNames from 'classnames/bind';
import Cards from '../Cards/Cards';
import styles from './home.module.scss';
import paintings from '../../db/dataBase';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx('main')}>
      <section className={cx('main__container')}>
        <div className={cx('info')}>
          Hi everyone! To search through cards according to{' '}
          <span className={cx('accent')}>TASK 05</span> go to{' '}
          <span className={cx('accent')}>Exhibitions</span> page!
        </div>
        <h1 className={cx('main__heading')}>Featured Paintings</h1>
        <Cards paintings={paintings} />
      </section>
    </main>
  );
};

export default Home;
