/**
 * Laravel REST API Helper Service
 * Mengatur komunikasi HTTP dari React Frontend ke Laravel API backend (e.g. Sanctum / REST Controller)
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const apiService = {
  // --- MENU ENDPOINTS ---
  async getMenus() {
    try {
      const response = await fetch(`${API_BASE_URL}/menus`, {
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) throw new Error('API Error');
      return await response.json();
    } catch (err) {
      console.warn('Backend Laravel belum tersambung, menggunakan data CMS lokal.', err);
      return null;
    }
  },

  async createMenu(data) {
    const token = localStorage.getItem('kurangkopi_token');
    const response = await fetch(`${API_BASE_URL}/menus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  async updateMenu(id, data) {
    const token = localStorage.getItem('kurangkopi_token');
    const response = await fetch(`${API_BASE_URL}/menus/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  async deleteMenu(id) {
    const token = localStorage.getItem('kurangkopi_token');
    const response = await fetch(`${API_BASE_URL}/menus/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return await response.json();
  },

  // --- REVIEWS ENDPOINTS ---
  async getReviews() {
    try {
      const response = await fetch(`${API_BASE_URL}/reviews`);
      if (!response.ok) throw new Error('API Error');
      return await response.json();
    } catch (err) {
      return null;
    }
  },

  // --- AUTH ENDPOINTS (Laravel Sanctum) ---
  async loginAdmin(email, password) {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    return await response.json();
  }
};
