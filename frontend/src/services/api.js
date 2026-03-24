import axios from "axios";

const API = "http://localhost:5000/api/ai";

export const askAI = async (prompt) => {
  return axios.post(`${API}/ask`, { prompt });
};

export const savePrompt = async (prompt, response) => {
  return axios.post(`${API}/save`, {
    prompt,
    response,
  });
};

export const getHistory = async () => {
  return axios.get(`${API}/history`);
};
