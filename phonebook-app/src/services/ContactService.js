import axios from 'axios';

const API_URL = 'http://localhost:8080/api/contacts';

export const getContacts = () => axios.get(API_URL);
export const getContactById = (id) => axios.get(`${API_URL}/${id}`);
export const createContact = (contact) => axios.post(API_URL, contact);
export const updateContact = (id, contact) => axios.put(`${API_URL}/${id}`, contact);
export const deleteContact = (id) => axios.delete(`${API_URL}/${id}`);
export const searchContacts = (name) => axios.get(`${API_URL}/search`, { params: { name } });