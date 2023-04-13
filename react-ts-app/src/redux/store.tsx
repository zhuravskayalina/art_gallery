import { configureStore } from '@reduxjs/toolkit';
import * as process from 'process';
import searchBarSliceReducer from './searchBar/searchBarSlice';

const store = configureStore({
  reducer: {
    searchbar: searchBarSliceReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
