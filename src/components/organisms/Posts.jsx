import { Box, Grid, Typography } from "@mui/material";
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
  }, []);

  return (
    <>
      {user && (
        <Box sx={{ margin: "0 5%" }}>
          <Grid container spacing={4}>
            {user.posts.map((postId) => (
              <Post key={postId} username={user.username} postId={postId} />
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Posts;
