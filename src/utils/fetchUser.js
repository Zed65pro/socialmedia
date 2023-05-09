import api from "../api/api";
import { getCurrentUser } from "../storage/authReducers";
import store from "../storage/useLogin.js";

export const fetchUser = async (navigate, state) => {
  if (state) {
    const response = await api.get(`/users/${state.id}`);
    state.setProfile(response.data);
  } else {
    store.dispatch(getCurrentUser(navigate));
  }
};
