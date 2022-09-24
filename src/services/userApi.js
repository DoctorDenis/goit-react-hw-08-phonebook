import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getToken = () =>
  JSON.parse(JSON.parse(localStorage.getItem('persist:root')).token);

export async function registerUser(user) {
  const { data } = await axios.post('users/signup', user);
  axios.defaults.headers.common['Authorization'] = data.token;
  return data;
}

export async function loginUser(user) {
  const { data } = await axios.post('users/login', user);
  axios.defaults.headers.common['Authorization'] = data.token;
  return data;
}

export async function logoutUser({ user }) {
  const { data } = await axios.post('users/logout', user, {
    headers: { Authorization: getToken() },
  });
  // axios.defaults.headers.common['Authorization'] = '';
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('contacts', contact, {
    headers: { Authorization: getToken() },
  });
  return data;
}

export async function getContacts() {
  const { data } = await axios.get('contacts', {
    headers: { Authorization: getToken() },
  });
  return data;
}

export async function editContact({ id, name, number }) {
  const { data } = await axios.patch(
    `contacts/${id}`,
    { name, number },
    {
      headers: { Authorization: getToken() },
    }
  );
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`contacts/${id}`, {
    headers: { Authorization: getToken() },
  });
  return data;
}
