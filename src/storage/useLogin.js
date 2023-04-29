import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
} from "./authReducers";
import { removeToken } from "./authStorage";
import { POST_FAILURE, POST_REQUEST } from "./postReducers";

//RESET ERROR
export const RESET_ERROR = "RESET_ERROR";

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
    case POST_REQUEST:
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
    case LOGOUT_FAILURE:
    case POST_FAILURE:
    case USER_FAILURE:
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
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
