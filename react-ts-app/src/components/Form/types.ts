import React from 'react';

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
  photo: string;
}

export interface FormProps {
  setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
}
