import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import styles from './form-page.module.scss';
import Form from '../Form/Form';
import FormCards from '../Form/FormCards/FormCards';
import { RootState } from '../../redux/store';

const cx = classNames.bind(styles);

const FormPage = () => {
  const cards = useSelector((state: RootState) => state.formCards.cards);

  return (
    <main className={cx('main')}>
      <div className={cx('main__container')}>
        <h2 className={cx('main__heading')}>
          Tell us about your experience at Cultured Kid Gallery:
        </h2>
        <Form />
        {cards && <FormCards cards={cards} />}
      </div>
    </main>
  );
};

export default FormPage;
