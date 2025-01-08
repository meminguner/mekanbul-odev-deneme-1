import axios from "axios";

const instance = axios.create({
  baseURL: "https://mekanbul-odev-deneme-1-backend.vercel.app/api",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

export default instance;
