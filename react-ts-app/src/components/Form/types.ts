import { Dispatch, SetStateAction } from 'react';

interface FormData {
  userName: string;
  userEmail: string;
  feedback: string;
  visitDate: string;
  favouriteArtwork: string;
  isAnonymously: boolean;
  likeCheckboxes: string[];
  isWantPostcard: string;
}

export interface FormValues extends FormData {
  photo: FileList | undefined;
}

export interface CardData extends FormData {
  id: string;
  photo: string;
}

export interface FormProps {
  setCards: Dispatch<SetStateAction<CardData[]>>;
}
