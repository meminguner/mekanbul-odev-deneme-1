import axios from "axios";
export default axios.create({
  baseURL: "https://mekanbul-odev-deneme-1-backend.vercel.app/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});
