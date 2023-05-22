import api from "../api/api";

export const fetchPost = async (userId, page, pageSize) => {
  try {
    const response = userId
      ? await api.get(`/post/user/${userId}`)
      : await api.get(`/post/`);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchPostById = async (postId) => {
  try {
    const response = await api.get(`/post/${postId}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
