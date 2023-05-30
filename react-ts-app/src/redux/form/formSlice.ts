import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from '../../components/Form/types';

const initialState: FormValues = {
  photo: undefined,
  favouriteArtwork: '',
  feedback: '',
  isAnonymously: false,
  isWantPostcard: '',
  likeCheckboxes: [],
  userEmail: '',
  userName: '',
  visitDate: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormValues>) => action.payload,
    resetForm: () => initialState,
  },
});

export const { setFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
