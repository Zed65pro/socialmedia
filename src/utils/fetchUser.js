import api from "../api/api";
import store from "../storage/rootReducers";
import { getCurrentUser } from "../storage/userReducers";

export const fetchUser = async (navigate, state) => {
  if (state) {
    const response = await api.get(`/users/${state.id}`);
    state.setProfile(response.data);
  } else {
    store.dispatch(getCurrentUser(navigate));
  }
};
