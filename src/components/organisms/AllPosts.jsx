import { Box, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { LoadingScreen } from "../atoms/LoadingScreen";
import Post from "../molecules/Post";
import AddIcon from "@mui/icons-material/Add";
import { BiPlus } from "react-icons/bi";

const AllPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = userId
        ? await api.get(`/post/user/${userId}`)
        : await api.get(`/post/`);
      const posts = response.data;

      // Randomize the order of posts
      const randomizedPosts = shuffleArray(posts);

      const usernamePromises = randomizedPosts.map(async (post) => {
        const response = await api.get(`/auth/username/${post.userId}`);
        return response.data;
      });

      try {
        const usernames = await Promise.all(usernamePromises);
        const result = randomizedPosts.map((post, index) => ({
          username: usernames[index],
          ...post,
        }));
        setPosts(result);
        setVisiblePosts(result.slice(0, 3)); // Display initial 3 posts
        setShowMore(result.length > 3); // Show more button if there are more than 3 posts
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  const handleShowMore = () => {
    const nextVisiblePosts = posts.slice(0, visiblePosts.length + 1);
    setVisiblePosts(nextVisiblePosts);
    setShowMore(nextVisiblePosts.length < posts.length);
  };

  // Helper function to shuffle array elements
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={6}
            sx={{
              padding: "1rem",
              width: { md: "80%", lg: "60%" },
            }}
          >
            {visiblePosts.map((post, index) => (
              <React.Fragment>
                <Post
                  userId={post.userId}
                  username={post.username}
                  postId={post._id}
                  key={post._id}
                />
                {index === visiblePosts.length - 1 && (
                  <Grid item xs={12}>
                    {showMore && (
                      <IconButton
                        onClick={handleShowMore}
                        sx={{ display: "block", margin: "0 auto" }}
                      >
                        <BiPlus />
                      </IconButton>
                    )}
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default AllPosts;
