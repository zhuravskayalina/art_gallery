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
  photo: FileList;
}

export interface CardData extends FormData {
  id: number;
  photo: string;
}

export interface FormProps {
  setCards: Dispatch<SetStateAction<CardData[]>>;
}
