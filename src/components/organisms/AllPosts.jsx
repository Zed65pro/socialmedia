import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Post from "../molecules/Post";
const AllPosts = ({ userId }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = userId
        ? await api.get(`/post/user/${userId}`)
        : await api.get(`/post/`);
      const posts = response.data;
      const usernamePromises = posts.map(async (post) => {
        const response = await api.get(`/auth/username/${post.userId}`);
        return response.data;
      });

      let result = null;
      await Promise.all(usernamePromises)
        .then((usernames) => {
          result = posts.map((post, index) => {
            return {
              username: usernames[index],
              ...post,
            };
          });
        })
        .catch((error) => console.error(error));
      setPosts(result);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {posts && (
        <Box sx={{ margin: "0 20%" }}>
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Post
                key={post._id}
                userId={post.userId}
                username={post.username}
                postId={post._id}
              />
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default AllPosts;
