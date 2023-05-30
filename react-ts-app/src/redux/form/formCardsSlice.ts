import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardData } from '../../components/Form/types';

interface CardsInitialState {
  cards: CardData[];
}

const initialState: CardsInitialState = {
  cards: [],
};

const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardData>) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const { setCards } = formCardsSlice.actions;
export default formCardsSlice.reducer;
