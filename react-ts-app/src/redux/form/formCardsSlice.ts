import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from '../../components/Form/types';

interface CardsInitialState {
  cards: CardData[];
  cardId: number;
}

const initialState: CardsInitialState = {
  cards: [],
  cardId: 0,
};

const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardData>) => {
      state.cards = [...state.cards, action.payload];
    },
    incrementCardId: (state) => {
      state.cardId += 1;
    },
  },
});

export const { setCards, incrementCardId } = formCardsSlice.actions;
export default formCardsSlice.reducer;
