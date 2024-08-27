import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const register = (body: any) => {
  return axios.post(`${API_URL}/auth/register`, body);
};

export const login = (body: any) => {
  return axios.post(`${API_URL}/auth/login`, body);
};

export const getAllProducts = () => {
  return axios.get(`${API_URL}/product`);
};

export const getProductById = (id: number) => {
  return axios.get(`${API_URL}/product/${id}`);
};
