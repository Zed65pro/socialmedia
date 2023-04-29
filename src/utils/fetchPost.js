import api from "../api/api";

export const fetchPost = async (postId) => {
  try {
    const response = await api.get(`/post/${postId}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
