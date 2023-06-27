import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getContacts = async () => {
  const response = await instance.get(`/contacts`);
  return response.data;
};

export const addNewContact = async contact => {
  const response = await instance.post(`/contacts`, contact);
  return response.data;
};

export const deleteOneContact = async id => {
  const response = await instance.delete(`/contacts/${id}`);
  return response.data;
};

export const registerUser = async user => {
  const response = await instance.post(`/users/signup`, user);
  return response.data;
};

export const logInUser = async user => {
  const response = await instance.post(`/users/login`, user);
  return response.data;
};

export const logOut = async () => {
  const response = await instance.post(`/users/logout`);
  return response.data;
};
