import { RefObject } from 'react';

export type FormState = {
  submit: boolean;
  cards: CardData[];
  userNameError: boolean;
  userEmailError: boolean;
  feedbackError: boolean;
  choiceError: boolean;
  dateError: boolean;
  uploadError: boolean;
  checkboxesError: boolean;
  radioError: boolean;
};

export interface CardData {
  userName: string;
  feedback: string;
  favouriteArtwork: string;
  visitDate: string;
  photo: string;
  isAnonymously: boolean;
  whatLikeAboutGallery: string[];
  isWantPostcard: boolean;
}

export interface CheckboxData {
  label: string;
  name: string;
  ref: RefObject<HTMLInputElement>;
}

export interface RadioButton {
  name: string;
  title: string;
  value: string;
  ref: RefObject<HTMLInputElement>;
}

export interface FormProps {}
