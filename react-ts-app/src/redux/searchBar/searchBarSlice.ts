import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    savedValue: '',
    currentValue: '',
  },
  reducers: {
    setSavedValue: (state, action: PayloadAction<string>) => {
      state.savedValue = action.payload;
    },
    setCurrentValue: (state, action: PayloadAction<string>) => {
      state.currentValue = action.payload;
    },
  },
});

export const { setSavedValue, setCurrentValue } = searchBarSlice.actions;
export default searchBarSlice.reducer;
