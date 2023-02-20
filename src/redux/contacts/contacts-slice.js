import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContactAction(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteContactAction(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
