import { constants } from "../constants";
import api from "../api/api";

// User token id
export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

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

export const getCurrentUser = () => {
  return async (dispatch) => {
    dispatch(userRequest());

    try {
      const response = await api.get("/token");
      dispatch(userSuccess(response.data));
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

export const addFriend = (friendId) => {
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
