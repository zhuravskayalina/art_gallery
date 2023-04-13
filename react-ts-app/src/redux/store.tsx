import { configureStore } from '@reduxjs/toolkit';
import * as process from 'process';
import searchBarSliceReducer from './searchBar/searchBarSlice';
import formReducer from './form/formSlice';
import formCardsReducer from './form/formCardsSlice';

const store = configureStore({
  reducer: {
    searchbar: searchBarSliceReducer,
    form: formReducer,
    formCards: formCardsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
