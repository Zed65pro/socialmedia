import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import api from "../api/api";
import { constants } from "../constants";
import { saveToken, removeToken, saveUser, removeUser } from "./authStorage";

//RESET ERROR
export const RESET_ERROR = "RESET_ERROR";
// Login action types
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
// Signup action types
const SIGNUP_REQUEST = "SIGNUP_REQUEST";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const SIGNUP_FAILURE = "SIGNUP_FAILURE";
// Logout
const LOGOUT_REQUEST = "LOGOUT_REQUEST";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_FAILURE = "LOGOUT_FAILURE";

// Login data
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
// Signup data
export const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});
export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});
export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});
// Logout data
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

// Reducers
export const signup = (username, email, password, navigate) => {
  return async (dispatch) => {
    dispatch(signupRequest());

    try {
      const response = await api.post("/auth/signup", {
        username,
        email,
        password,
      });

      const user = { username, email, password, token: response.data };
      dispatch(signupSuccess(user));

      navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
    } catch (error) {
      const errorMessage = error.response.data || "An unknown error occurred";
      dispatch(signupFailure(errorMessage));
    }
  };
};

export const signin = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await api.post("/auth/signin", {
        email,
        password,
      });

      const user = {
        username: response.data.user.username,
        email,
      };
      saveToken(response.data.token);
      saveUser(response.data.user.username);
      dispatch(loginSuccess(user));
      navigate(`${constants.BASE_URL}/${constants.HOME}`);
    } catch (error) {
      // Dispatch a failure action with the error object
      const errorMessage = error.response.data || "An unknown error occurred";
      dispatch(loginFailure(errorMessage));
    }
  };
};

export const logout = (navigate) => {
  return async (dispatch) => {
    dispatch(logoutRequest);

    try {
      await api.post("/auth/logout");
      console.log("LOGGED OUT");
      dispatch(logoutSuccess(LOGOUT_SUCCESS));

      navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
    } catch (error) {
      const errorMessage = error.response.date || "An unknown error occurred.";
      dispatch(logoutFailure(errorMessage));
    }
  };
};

export const reset_error = () => {
  return async (dispatch) => {
    dispatch({ type: RESET_ERROR });
  };
};

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    case LOGOUT_SUCCESS:
      removeToken();
      removeUser();
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
