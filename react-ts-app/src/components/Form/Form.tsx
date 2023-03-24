import React, { ChangeEvent, Component, createRef, FormEvent, RefObject } from 'react';
import classNames from 'classnames/bind';
import styles from './form.module.scss';
import Input from './Input/Input';
import Select from './Select/Select';
import Checkbox from './Checkbox/Checkbox';
import Radio from './Radio/Radio';
import DateInput from './DateInput/DateInput';
import Switcher from './Switcher/Switcher';
import FileUpload from './FileUpload/FileUpload';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { CheckboxData, FormProps, FormState, RadioButton } from './types';
import dateClient from '../../DateClient/DateClient';
import Cards from './Cards/Cards';
import Modal from '../Modal/Modal';
import Button from './Button/Button';

const cx = classNames.bind(styles);

class Form extends Component<FormProps, FormState> {
  form: RefObject<HTMLFormElement>;
  userName: RefObject<HTMLInputElement>;
  userEmail: RefObject<HTMLInputElement>;
  feedback: RefObject<HTMLTextAreaElement>;
  artworkChoice: RefObject<HTMLSelectElement>;
  visitDate: RefObject<HTMLInputElement>;
  uploadPicture: RefObject<HTMLInputElement>;
  makeNameVisible: RefObject<HTMLInputElement>;
  checkboxLightning: RefObject<HTMLInputElement>;
  checkboxEvents: RefObject<HTMLInputElement>;
  checkboxStaff: RefObject<HTMLInputElement>;
  checkboxDislike: RefObject<HTMLInputElement>;
  doWantPostYes: RefObject<HTMLInputElement>;
  doWantPostNo: RefObject<HTMLInputElement>;
  uploadPhoto: string;
  checkboxesOptions: CheckboxData[];
  postcardRadioOptions: RadioButton[];

  constructor(props: FormProps) {
    super(props);

    this.form = createRef();
    this.userName = createRef();
    this.userEmail = createRef();
    this.feedback = createRef();
    this.artworkChoice = createRef();
    this.visitDate = createRef();
    this.uploadPicture = createRef();
    this.makeNameVisible = createRef();
    this.checkboxEvents = createRef();
    this.checkboxLightning = createRef();
    this.checkboxDislike = createRef();
    this.checkboxStaff = createRef();
    this.doWantPostYes = createRef();
    this.doWantPostNo = createRef();

    this.uploadPhoto = '';

    this.state = {
      userNameError: false,
      userEmailError: false,
      feedbackError: false,
      choiceError: false,
      dateError: false,
      uploadError: false,
      checkboxesError: false,
      radioError: false,
      submit: false,
      cards: [],
    };

    this.checkboxesOptions = [
      {
        label: 'Nice lightning',
        name: 'lightning',
        ref: this.checkboxLightning,
      },
      {
        label: 'Interesting events',
        name: 'events',
        ref: this.checkboxEvents,
      },
      {
        label: 'Friendly staff',
        name: 'staff',
        ref: this.checkboxStaff,
      },
      {
        label: 'I dont like it here',
        name: 'dislike',
        ref: this.checkboxDislike,
      },
    ];

    this.postcardRadioOptions = [
      {
        name: 'postcardRadio',
        title: 'yes',
        value: 'yes',
        ref: this.doWantPostYes,
      },
      {
        name: 'postcardRadio',
        title: 'no',
        value: 'no',
        ref: this.doWantPostNo,
      },
    ];
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (this.isFormValid()) {
      this.setState({
        submit: true,
      });

      const newCard = {
        userName: this.userName.current?.value as string,
        feedback: this.feedback.current?.value as string,
        favouriteArtwork: this.artworkChoice.current?.value as string,
        visitDate: dateClient.formatDate(this.visitDate.current?.valueAsNumber) as string,
        photo: this.uploadPhoto,
        isAnonymously: this.makeNameVisible.current?.checked as boolean,
        whatLikeAboutGallery: [
          this.checkboxLightning.current?.checked && 'nice lightning',
          this.checkboxStaff.current?.checked && 'friendly staff',
          this.checkboxEvents.current?.checked && 'interesting events',
          this.checkboxDislike.current?.checked && 'nothing :(',
        ].filter((item) => item) as string[],
        isWantPostcard: !!this.doWantPostYes.current?.checked as boolean,
      };

      this.setState((prevState) => ({
        cards: [...prevState.cards, newCard],
      }));

      setTimeout(() => {
        this.setState({
          submit: false,
        });
        this.form.current?.reset();
      }, 2000);
    }
  };

  handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const fileReader = new FileReader();
      const file = event.target.files[0];
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        this.uploadPhoto = fileReader.result as string;
      };
    }
  };

  isFormValid = () => {
    const formField = [];

    formField.push(this.validateUserName());
    formField.push(this.validateUserEmail());
    formField.push(this.validateUserFeedback());
    formField.push(this.validateChosenArtwork());
    formField.push(this.validateDate());
    formField.push(this.validateFileUpload());
    formField.push(this.validateCheckboxes());
    formField.push(this.validateRadioButtons());

    return !formField.includes(false);
  };

  validateUserName = () => {
    const value = this.userName.current?.value;
    if (!value?.trim() || value?.charAt(0) !== value?.charAt(0).toUpperCase()) {
      this.setState({
        userNameError: true,
      });
      return false;
    }
    this.setState({
      userNameError: false,
    });
    this.userName.current?.classList.remove('input_error');
    return true;
  };

  validateUserEmail = () => {
    const value = this.userEmail.current?.value;

    const isValid = String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (!isValid) {
      this.setState({
        userEmailError: true,
      });
      return false;
    }
    this.setState({
      userEmailError: false,
    });
    return true;
  };

  validateUserFeedback = () => {
    const value = this.feedback.current?.value;
    if (!value?.trim() || value?.trim().length < 10) {
      this.setState({
        feedbackError: true,
      });
      return false;
    }
    this.setState({
      feedbackError: false,
    });
    this.userName.current?.classList.remove('input_error');
    return true;
  };

  validateChosenArtwork = () => {
    const value = this.artworkChoice.current?.value;
    if (!value?.trim()) {
      this.setState({
        choiceError: true,
      });
      return false;
    }
    this.setState({
      choiceError: false,
    });
    return true;
  };

  validateDate = () => {
    const value = this.visitDate.current?.valueAsNumber;

    if (!value || value < 1199145600000 || value > Date.now()) {
      this.setState({
        dateError: true,
      });
      return false;
    }
    this.setState({
      dateError: false,
    });
    return true;
  };

  validateFileUpload = () => {
    if (!this.uploadPhoto) {
      this.setState({
        uploadError: true,
      });
      return false;
    }
    this.setState({
      uploadError: false,
    });
    return true;
  };

  validateCheckboxes = () => {
    const checkboxes = [
      this.checkboxLightning.current?.checked,
      this.checkboxDislike.current?.checked,
      this.checkboxEvents.current?.checked,
      this.checkboxStaff.current?.checked,
    ];

    if (!checkboxes.includes(true)) {
      this.setState({
        checkboxesError: true,
      });
      return false;
    }
    this.setState({
      checkboxesError: false,
    });
    return true;
  };

  validateRadioButtons = () => {
    const buttons = [this.doWantPostYes.current?.checked, this.doWantPostNo.current?.checked];
    if (!buttons.includes(true)) {
      this.setState({
        radioError: true,
      });
      return false;
    }
    this.setState({
      radioError: false,
    });
    return true;
  };

  render() {
    return (
      <>
        <form method="post" onSubmit={this.handleSubmit} className={cx('form')} ref={this.form}>
          <ul className={cx('list')}>
            <li className={cx('list__item')}>
              <Input name="name" label="your name" type="text" ref={this.userName} />
              {this.state.userNameError && (
                <ErrorMessage text="Please, write correct name with a capital letter" />
              )}
            </li>
            <li className={cx('list__item')}>
              <Input name="email" label="your email" type="email" ref={this.userEmail} />
              {this.state.userEmailError && <ErrorMessage text="Please, write correct email" />}
            </li>
            <li className={cx('list__item', 'list__item_textarea')}>
              <p>Write a comment:</p>
              <textarea name="comment" className={cx('textarea')} ref={this.feedback} />
              {this.state.feedbackError && (
                <ErrorMessage text="Feedback should be longer than 10 symbols" />
              )}
            </li>
            <li className={cx('list__item')}>
              <div className={cx('list__item_select')}>
                <p>Most impressive art work:</p>
                <Select
                  validateChosenArtwork={this.validateChosenArtwork}
                  ref={this.artworkChoice}
                />
              </div>
              {this.state.choiceError && <ErrorMessage text="Please, choose artwork" />}
            </li>
            <li className={cx('list__item')}>
              <div className={cx('list__item_date')}>
                <p>Your visit date:</p>
                <DateInput ref={this.visitDate} validateDate={this.validateDate} />
              </div>
              {this.state.dateError && <ErrorMessage text="Please, pick correct date" />}
            </li>
            <li className={cx('list__item')}>
              <div className={cx('list__item_upload')}>
                <p>Leave a picture:</p>
                <FileUpload handleFileUpload={this.handleFileUpload} ref={this.uploadPicture} />
              </div>
              {this.state.uploadError && <ErrorMessage text="Please, upload a photo" />}
            </li>
            <li className={cx('list__item', 'list__item_switcher')}>
              <p>Make my name invisible:</p>
              <Switcher ref={this.makeNameVisible} />
            </li>
            <li className={cx('list__item', 'list__item_checkboxes')}>
              <p className={cx('bold')}>What i like about Cultured Kid Gallery:</p>
              <div className={cx('form__checkboxes')}>
                {this.checkboxesOptions.map(({ label, name, ref }) => (
                  <Checkbox label={label} name={name} ref={ref} key={name} />
                ))}
              </div>
              {this.state.checkboxesError && <ErrorMessage text="Please, choose something" />}
            </li>
            <li className={cx('list__item')}>
              <div className={cx('list__item_radio')}>
                <p>Do you want a postcard from us?</p>
                <div className={cx('switch-box')}>
                  {this.postcardRadioOptions.map(({ name, value, title, ref }) => (
                    <Radio name={name} value={value} title={title} key={value} ref={ref} />
                  ))}
                </div>
              </div>
              {this.state.radioError && <ErrorMessage text="Please, choose an option" />}
            </li>
          </ul>
          <div className={cx('form__controls')}>
            <Button type="reset" title="reset" />
            <Button type="submit" title="submit" />
          </div>
        </form>
        {this.state.cards.length > 0 && <Cards cards={this.state.cards} />}
        <Modal showModal={this.state.submit}>
          <p className={cx('submit-message')}>Thank you! Your feedback has been saved.</p>
        </Modal>
      </>
    );
  }
}

export default Form;
