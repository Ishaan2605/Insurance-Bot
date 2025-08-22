import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const insuranceApi = {
  // Get insurance recommendations
  getRecommendations: async (data) => {
    try {
      const response = await api.post('/recommend', data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Failed to get recommendations');
    }
  },

  // Chat with the insurance bot
  chatWithBot: async (message) => {
    try {
      const response = await api.post('/chat', { message });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Failed to get chat response');
    }
  },

  // Get vehicle insurance quote
  getVehicleQuote: async (data) => {
    try {
      const response = await api.post('/recommend', {
        ...data,
        policy_type: 'VEHICLE',
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Failed to get vehicle quote');
    }
  },

  // Get health insurance quote
  getHealthQuote: async (data) => {
    try {
      const response = await api.post('/recommend', {
        ...data,
        policy_type: 'HEALTH',
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.detail || 'Failed to get health quote');
    }
  },
};

export default api;
