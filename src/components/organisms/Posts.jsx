import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../utils/fetchUser";
import Post from "../molecules/Post";

const Posts = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !user && fetchUser(navigate);
  }, [user]);

  return (
    <>
      {user &&
        user.posts.map((postId) => (
          <Post key={postId} username={user.username} postId={postId} />
        ))}
    </>
  );
};

export default Posts;
