import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGOUT_SUCCESS,
} from "./authReducers";
import { POST_FAILURE, POST_REQUEST, POST_SUCCESS } from "./postReducers";
import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./userReducers";
import { removeToken } from "./authStorage";

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

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
    case POST_REQUEST:
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_SUCCESS:
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case AUTH_FAILURE:
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

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
