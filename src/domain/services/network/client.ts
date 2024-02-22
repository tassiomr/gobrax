import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-gobrax.vercel.app/',
});

export default api;
