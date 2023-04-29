import { constants } from "../constants";
import api from "../api/api";

// post action types
export const POST_REQUEST = "POST_REQUEST";
export const POST_GET = "POST_GET";
export const POST_CREATE = "POST_CREATE";
export const POST_UPDATE = "POST_UPDATE";
export const POST_DELETE = "POST_DELETE";
export const POST_FAILURE = "POST_FAILURE";

// // Login data
// export const postGet = () => ({
//     type: POST_GET,
//     payload: postId
//   });

export const postRequest = () => ({
  type: POST_REQUEST,
});
export const postCreateRequest = (post) => ({
  type: POST_CREATE,
  payload: post,
});
export const postUpdateRequest = (updatedPost) => ({
  type: POST_CREATE,
  payload: updatedPost,
});

export const postDeleteRequest = () => ({
  type: POST_DELETE,
});
export const postFailure = (error) => ({
  type: POST_FAILURE,
  payload: error,
});
//   export const loginFailure = (error) => ({
//     type: LOGIN_FAILURE,
//     payload: error,
//   });

export const postCreate = (body, hashtags, userId, navigate) => {
  return async (dispatch) => {
    dispatch(postRequest());

    try {
      const response = await api.post("/post", {
        body,
        hashtags,
        userId,
      });

      const post = { body, hashtags, userId };
      dispatch(postCreateRequest(post));

      navigate(`${constants.BASE_URL}/${constants.HOME}`);
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
      const response = await api.post("/post", {
        body,
        hashtags,
      });

      const post = { body, hashtags, userId: response.data.userId };
      dispatch(postUpdateRequest(post));

      navigate(`${constants.BASE_URL}/${constants.HOME}`);
    } catch (error) {
      const errorMessage = error.response.data || "An unknown error occurred";
      dispatch(postFailure(errorMessage));
    }
  };
};

export const postDelete = (body, hashtags, navigate) => {
  return async (dispatch) => {
    dispatch(postRequest());

    try {
      await api.delete("/post");
      dispatch(postDeleteRequest());

      navigate(`${constants.BASE_URL}/${constants.HOME}`);
    } catch (error) {
      const errorMessage = error.response.data || "An unknown error occurred";
      dispatch(postFailure(errorMessage));
    }
  };
};
