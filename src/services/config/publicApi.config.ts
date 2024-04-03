import axios from 'axios';

const publicApi = axios.create({
  baseURL: process.env.API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default publicApi;
