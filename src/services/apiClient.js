// src/services/apiClient.js
import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.134.1:8080',
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // enable if your backend uses cookies for auth
});

export default api;
