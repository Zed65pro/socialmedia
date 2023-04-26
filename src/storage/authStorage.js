// authStorage.js

// Save the token to localStorage
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const saveUser = (user) => {
  localStorage.setItem("user", user);
};
// Retrieve the token from localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUser = () => {
  return localStorage.getItem("user");
};

// Remove the token from localStorage
export const removeToken = () => {
  localStorage.removeItem("token");
};

export const removeUser = () => {
  localStorage.removeItem("user");
};
