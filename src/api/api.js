import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://6cc2-2001-8f8-1669-9fc-2086-d48-966c-d770.ngrok-free.app",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
