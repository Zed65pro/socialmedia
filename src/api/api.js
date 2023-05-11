import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://social-media-app-server-o938.onrender.com",
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