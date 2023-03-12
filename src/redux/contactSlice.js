import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
