import { constants } from "../constants";
import api from "../api/api";
import { saveToken } from "./authStorage";

// Login action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
// Signup action types
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
// Logout
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

// User token id
export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

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

export const userRequest = () => ({
  type: USER_REQUEST,
});

export const userSuccess = (user) => ({
  type: USER_SUCCESS,
  payload: user,
});
export const userFailure = (error) => ({
  type: USER_FAILURE,
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
      const errorMessage = error?.response?.data || "An unknown error occurred";
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

      const user = response.data.user;
      saveToken(response.data.token);
      dispatch(loginSuccess(user));
      navigate(`${constants.BASE_URL}/${constants.HOME}`);
    } catch (error) {
      // Dispatch a failure action with the error object
      const errorMessage = error?.response?.data || "An unknown error occurred";
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
      dispatch(logoutSuccess());

      navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
    } catch (error) {
      const errorMessage =
        error?.response?.data || "An unknown error occurred.";
      dispatch(logoutFailure(errorMessage));
    }
  };
};

export const getCurrentUser = (navigate) => {
  return async (dispatch) => {
    dispatch(userRequest());

    try {
      const response = await api.get("/token");
      dispatch(userSuccess(response.data));
      // console.log(response.data.user);
      // navigate(`${constants.BASE_URL}/${constants.HOME}`);
    } catch (error) {
      const errorMessage = error.response.data || "An unknown error occurred.";
      dispatch(userFailure(errorMessage));
    }
  };
};

export const updateUser = (
  userId,
  image,
  email,
  username,
  dateOfBirth,
  navigate
) => {
  return async (dispatch) => {
    dispatch(userRequest());

    try {
      const response = await api.patch("/users/edit", {
        image,
        email,
        username,
        dateOfBirth,
      });
      dispatch(userSuccess(response.data.user));
      navigate(`${constants.BASE_URL}/${constants.USER}/${userId}`);
    } catch (error) {
      const errorMessage = error.response.data || "An unknown error occurred.";
      dispatch(userFailure(errorMessage));
    }
  };
};

export const addFriend = (friendId, friend) => {
  return async (dispatch) => {
    dispatch(userRequest());

    try {
      const response = await api.post(`/users/friends`, {
        friendId,
      });
      dispatch(userSuccess(response.data));
    } catch (error) {
      const errorMessage = error.response.data || "An unknown error occurred.";
      dispatch(userFailure(errorMessage));
    }
  };
};

export const addFriendByEmail = (friendEmail) => {
  return async (dispatch) => {
    dispatch(userRequest());

    try {
      const response = await api.post(`/users/friends`, {
        friendEmail,
      });
      dispatch(userSuccess(response.data));
    } catch (error) {
      const errorMessage =
        error.response.data.error || "An unknown error occurred.";
      dispatch(userFailure(errorMessage));
    }
  };
};

export const removeFriend = (friendId) => {
  return async (dispatch) => {
    dispatch(userRequest());

    try {
      const response = await api.delete(`/users/friends/${friendId}`);
      dispatch(userSuccess(response.data));
    } catch (error) {
      const errorMessage = error.response.data || "An unknown error occurred.";
      dispatch(userFailure(errorMessage));
    }
  };
};
