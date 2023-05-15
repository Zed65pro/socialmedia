import { useState } from "react";
import api from "../api/api";

export const useLikeDislike = (post, userId) => {
  const [isLiked, setIsLiked] = useState(post.likes.includes(userId));
  const [isDisliked, setIsDisliked] = useState(post.dislikes.includes(userId));
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [dislikesCount, setDislikesCount] = useState(post.dislikesCount);

  const onLike = async () => {
    setIsLiked((state) => !state);
    if (isLiked) setLikesCount((prev) => prev - 1);
    if (!isLiked) setLikesCount((prev) => prev + 1);
    if (isDisliked) {
      setDislikesCount((prev) => prev - 1);
      setIsDisliked((state) => !state);
    }

    const response = await api.patch(`/post/likes/${post._id}`);
  };

  const onDislike = async () => {
    setIsDisliked((state) => !state);
    if (isDisliked) setDislikesCount((prev) => prev - 1);
    if (!isDisliked) setDislikesCount((prev) => prev + 1);
    if (isLiked) {
      setLikesCount((prev) => prev - 1);
      setIsLiked((state) => !state);
    }
    const response = await api.patch(`/post/dislikes/${post._id}`);
  };

  return {
    likesCount,
    isLiked,
    dislikesCount,
    isDisliked,
    onLike,
    onDislike,
  };
};
