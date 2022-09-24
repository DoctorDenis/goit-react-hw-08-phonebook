import * as userApi from '../services/userApi';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const register = createAsyncThunk('user/register', async user => {
  const data = await userApi.registerUser(user);
  console.log(data);
  return data;
});

export const login = createAsyncThunk('user/login', async user => {
  const data = await userApi.loginUser(user);
  return data;
});

export const logout = createAsyncThunk('user/logout', async userCredentials => {
  const data = await userApi.logoutUser(userCredentials);
  return data;
});

export const addContact = createAsyncThunk('contact/add', async contact => {
  const contacts = await userApi.getContacts();
  console.log(contacts);
  if (contacts.find(c => c.name === contact.name)) {
    return Promise.reject(
      new Error(`Contact ${contact.name} already exists. Try other name`)
    );
  }
  const data = await userApi.addContact(contact);
  return data;
});

export const getContacts = createAsyncThunk('contacts/get', async () => {
  const data = await userApi.getContacts();
  return data;
});

export const editContact = createAsyncThunk('contact/edit', async contact => {
  const data = await userApi.editContact(contact);
  return data;
});

export const deleteContact = createAsyncThunk('contact/delete', async id => {
  const data = await userApi.deleteContact(id);
  return data;
});

export const dissmissError = createAction('error/dissmiss');
