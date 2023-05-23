import { constants } from "../constants";
import api from "../api/api";
import { saveToken } from "./authStorage";

// Auth action types
export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
// Logout specific action
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
// reset error action
export const RESET_ERROR = "RESET_ERROR";

// Login data
export const authRequest = () => ({
  type: AUTH_REQUEST,
});
export const authSuccess = (user) => ({
  type: AUTH_SUCCESS,
  payload: user,
});
export const authFailure = (error) => ({
  type: AUTH_FAILURE,
  payload: error,
});
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const reset_error = () => {
  return async (dispatch) => {
    dispatch({ type: RESET_ERROR });
  };
};

// Reducers
export const signup = (username, email, password, navigate) => {
  return async (dispatch) => {
    dispatch(authRequest());

    try {
      const response = await api.post("/auth/signup", {
        username,
        email,
        password,
      });

      const user = { username, email, password, token: response.data };
      dispatch(authSuccess(user));

      navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
    } catch (error) {
      const errorMessage = error?.response?.data || "An unknown error occurred";
      dispatch(authFailure(errorMessage));
    }
  };
};

export const signin = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(authRequest());

    try {
      const response = await api.post("/auth/signin", {
        email,
        password,
      });

      const user = response.data.user;
      saveToken(response.data.token);
      dispatch(authSuccess(user));
      navigate(`${constants.BASE_URL}/${constants.HOME}`);
    } catch (error) {
      const errorMessage = error?.response?.data || "An unknown error occurred";
      dispatch(authFailure(errorMessage));
    }
  };
};

export const logout = (navigate) => {
  return async (dispatch) => {
    dispatch(authRequest);

    try {
      await api.post("/auth/logout");
      console.log("LOGGED OUT");

      dispatch(logoutSuccess());
      navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
    } catch (error) {
      const errorMessage =
        error?.response?.data || "An unknown error occurred.";
      dispatch(authFailure(errorMessage));
    }
  };
};
