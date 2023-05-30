import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames/bind';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styles from './form.module.scss';
import Input from './Input/Input';
import Select from './Select/Select';
import Checkbox from './Checkbox/Checkbox';
import Radio from './Radio/Radio';
import DateInput from './DateInput/DateInput';
import Switcher from './Switcher/Switcher';
import FileUpload from './FileUpload/FileUpload';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { CardData, FormValues } from './types';
import dateClient from '../../DateClient/DateClient';
import Modal from '../Modal/Modal';
import Button from './Button/Button';
import Textarea from './Textarea/Textarea';
import { RootState } from '../../redux/store';
import { resetForm, setFormData } from '../../redux/form/formSlice';
import { setCards } from '../../redux/form/formCardsSlice';

const cx = classNames.bind(styles);

const checkboxesOptions = [
  'Nice lightning',
  'Interesting events',
  'Friendly staff',
  'I dont like it here',
];

const postcardRadioOptions = [
  {
    title: 'yes',
    value: 'yes',
  },
  {
    title: 'no',
    value: 'no',
  },
];

const Form = () => {
  const formData = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const [submit, setSubmit] = useState(false);
  const [isModalActive, setModalActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormValues>({
    defaultValues: formData,
  });

  useEffect(() => {
    return () => {
      dispatch(setFormData(getValues()));
    };
  }, []);

  const handleImageUpload = (image: FileList) => {
    if (image[0]) {
      return URL.createObjectURL(image[0]);
    }
    return '';
  };

  const onSubmit: SubmitHandler<FormValues> = async ({
    userName,
    userEmail,
    feedback,
    visitDate,
    photo,
    favouriteArtwork,
    isAnonymously,
    isWantPostcard,
  }) => {
    const newCard: CardData = {
      id: nanoid(),
      userName,
      userEmail,
      feedback,
      photo: '',
      visitDate: dateClient.formatDate(dateClient.formatDateToNumber(visitDate)),
      isAnonymously,
      favouriteArtwork,
      likeCheckboxes: getValues('likeCheckboxes'),
      isWantPostcard,
    };

    if (photo) {
      newCard.photo = handleImageUpload(photo);
    }
    dispatch(setCards(newCard));
    setSubmit(true);
    setModalActive(true);
    dispatch(resetForm());
    reset();
    setTimeout(() => {
      setSubmit(false);
      setModalActive(false);
    }, 1500);
  };

  const atLeastOneCheckbox = () => {
    return !!getValues('likeCheckboxes').length;
  };

  return (
    <>
      <form
        name="feedbackForm"
        onSubmit={handleSubmit(onSubmit)}
        className={cx('form')}
        data-test="feedback-form"
      >
        <ul className={cx('list')}>
          <li className={cx('list__item')}>
            <Input name="userName" label="Your Name" register={register} type="text" />
            {errors.userName && <ErrorMessage text="Write correct name with a capital letter" />}
          </li>
          <li className={cx('list__item')}>
            <Input name="userEmail" label="Your Email" register={register} type="email" />
            {errors.userEmail && <ErrorMessage text="Please, write correct email" />}
          </li>
          <li className={cx('list__item', 'list__item_textarea')}>
            <Textarea register={register} />
            {errors.feedback && <ErrorMessage text="Feedback should be longer than 10 symbols" />}
          </li>
          <li className={cx('list__item')}>
            <div className={cx('list__item_select')}>
              <Select register={register} />
            </div>
            {errors.favouriteArtwork && <ErrorMessage text="Please, choose artwork" />}
          </li>
          <li className={cx('list__item')}>
            <div className={cx('list__item_date')}>
              <p>Your visit date:</p>
              <DateInput register={register} />
            </div>
            {errors.visitDate && <ErrorMessage text="Please, pick correct date" />}
          </li>
          <li className={cx('list__item')}>
            <div className={cx('list__item_upload')}>
              <p>Leave a picture:</p>
              <FileUpload register={register} />
            </div>
            {errors.photo && <ErrorMessage text="Please, upload a photo" />}
          </li>
          <li className={cx('list__item', 'list__item_switcher')}>
            <p>Make my name invisible:</p>
            <Switcher register={register} />
          </li>
          <li className={cx('list__item', 'list__item_checkboxes')}>
            <p className={cx('bold')}>What i like about Cultured Kid Gallery:</p>
            <div className={cx('form__checkboxes')} data-test="form-checkboxes">
              {checkboxesOptions.map((label) => (
                <Checkbox
                  label={label}
                  register={register}
                  key={label}
                  validate={atLeastOneCheckbox}
                />
              ))}
              {errors.likeCheckboxes && <ErrorMessage text="Please, choose an option" />}
            </div>
          </li>
          <li className={cx('list__item')}>
            <div className={cx('list__item_radio')}>
              <p>Do you want a postcard from us?</p>
              <div className={cx('switch-box')} data-test="form-switch-box">
                {postcardRadioOptions.map(({ value, title }) => (
                  <Radio value={value} title={title} key={title} register={register} />
                ))}
              </div>
            </div>
            {errors.isWantPostcard && <ErrorMessage text="Please, choose if you want a postcard" />}
          </li>
        </ul>
        <div className={cx('form__controls')} data-test="form-controls-buttons">
          <Button type="reset" title="reset" />
          <Button type="submit" title="submit" />
        </div>
      </form>
      {submit && (
        <Modal active={isModalActive} setActive={setModalActive}>
          <p data-testid="submit-modal" data-test="submit-modal" className={cx('submit-message')}>
            Thank you! Your feedback has been saved.
          </p>
        </Modal>
      )}
    </>
  );
};

export default Form;
