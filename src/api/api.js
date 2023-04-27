import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://9f5a-2001-8f8-1669-9fc-dde8-9d32-bab3-92e1.in.ngrok.io",
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
