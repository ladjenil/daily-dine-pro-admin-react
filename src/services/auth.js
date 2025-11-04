// src/services/auth.js
import api from './apiClient';

/**
 * Login with email and password.
 * Resolves with server payload (e.g. { token, user }) or throws an axios error.
 */
export async function login(email, password) {
  const response = await api.post('/api/auth/login', { email, password });
  return response.data;
}

export function saveToken(token) {
  if (!token) return;
  try {
    localStorage.setItem('authToken', token);
  } catch (e) {
    // ignore storage errors
  }
}

export function getToken() {
  return localStorage.getItem('authToken');
}

export async function logout() {
  try {
    await api.post('/api/auth/logout');
  } catch (e) {
    // ignore network logout errors
  }
  localStorage.removeItem('authToken');
}
