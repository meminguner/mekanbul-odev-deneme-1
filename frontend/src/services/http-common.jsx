import axios from "axios";

const instance = axios.create({
  baseURL: "https://mekanbul-odev-deneme-1-backend.vercel.app/api",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

export default instance;
