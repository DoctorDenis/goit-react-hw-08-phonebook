import { createSlice } from '@reduxjs/toolkit';
import { dissmissError } from './operations';
// import { editContact } from 'services/userApi';
import {
  register,
  login,
  logout,
  getContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

const userInitialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  token: '',
  isLoggedIn: false,
};

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state) {
      state.user = userInitialState.user;
      state.token = '';
      state.isLoggedIn = false;
    },
  },
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [getContacts.pending](state, action) {
      state.isLoading = true;
    },
    [getContacts.rejected](state, action) {
      state.error = action.error.message;
    },
    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
      // state.error = null;
    },
    [logout.fulfilled](state, { payload }) {
      state.error = null;
      state.contacts = [];
    },
    [addContact.fulfilled](state, action) {
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.error = action.error.message;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state) {
      state.isLoading = false;
    },
    [editContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.map(contact =>
        contact.id === payload.id ? payload : contact
      );
    },
    [dissmissError.type](state, action) {
      state.error = null;
    },
  },
});
