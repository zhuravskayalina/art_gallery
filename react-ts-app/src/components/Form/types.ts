import React from 'react';

export interface FormValues {
  userName: string;
  userEmail: string;
  feedback: string;
  visitDate: string;
  favouriteArtwork: string;
  photo: FileList;
  isAnonymously: boolean;
  likeCheckboxes: string[];
  isWantPostcard: string;
}

export interface CardData {
  id: number;
  userName: string;
  userEmail: string;
  feedback: string;
  visitDate: string;
  favouriteArtwork: string;
  photo: string;
  isAnonymously: boolean;
  likeCheckboxes: string[];
  isWantPostcard: string;
}

export interface FormProps {
  cards: CardData[];
  setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
}
