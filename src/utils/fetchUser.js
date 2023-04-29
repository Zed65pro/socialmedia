import { getCurrentUser } from "../storage/authReducers";
import store from "../storage/useLogin.js";

export const fetchUser = (navigate) => {
  store.dispatch(getCurrentUser(navigate));
};
