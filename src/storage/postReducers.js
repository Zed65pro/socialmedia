import { constants } from "../constants";
import api from "../api/api";

// post action types
export const POST_REQUEST = "POST_REQUEST";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

// Action types
export const postRequest = () => ({
  type: POST_REQUEST,
});
export const postProcessSuccess = () => ({
  type: POST_SUCCESS,
});
export const postFailure = (error) => ({
  type: POST_FAILURE,
  payload: error,
});

export const postCreate = (
  body,
  hashtags,
  userId,
  username,
  image,
  profilePicture,
  navigate
) => {
  return async (dispatch) => {
    dispatch(postRequest());

    try {
      await api.post("/post", {
        body,
        hashtags,
        userId,
        username,
        image,
        profilePicture,
      });
      dispatch(postProcessSuccess());

      navigate(`${constants.BASE_URL}/${constants.USER}/${userId}`);
    } catch (error) {
      const errorMessage = error.response.data || "An unknown error occurred";
      dispatch(postFailure(errorMessage));
    }
  };
};

export const postUpdate = (body, hashtags, navigate) => {
  return async (dispatch) => {
    dispatch(postRequest());

    try {
      await api.post("/post", {
        body,
        hashtags,
      });

      dispatch(postProcessSuccess());
      navigate(`${constants.BASE_URL}/${constants.HOME}`);
    } catch (error) {
      const errorMessage = error.response.data || "An unknown error occurred";
      dispatch(postFailure(errorMessage));
    }
  };
};

export const postDelete = (navigate) => {
  return async (dispatch) => {
    dispatch(postRequest());

    try {
      await api.delete("/post");
      dispatch(postProcessSuccess());
      navigate(`${constants.BASE_URL}/${constants.HOME}`);
    } catch (error) {
      const errorMessage = error.response.data || "An unknown error occurred";
      dispatch(postFailure(errorMessage));
    }
  };
};
