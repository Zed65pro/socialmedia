import { Box, Grid, IconButton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { LoadingScreen } from "../atoms/LoadingScreen";
import Post from "../molecules/Post";
import { BiPlus } from "react-icons/bi";
import { fetchPost } from "../../utils/fetchPost";

const AllPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Helper function to shuffle array elements
  const shuffleArray = useCallback((array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await fetchPost(userId);

        // Randomize the order of posts
        const randomizedPosts = shuffleArray(posts);
        setPosts(randomizedPosts);
        setVisiblePosts(randomizedPosts.slice(0, 3)); // Display initial 3 posts
        setShowMore(randomizedPosts.length > 3); // Show more button if there are more than 3 posts
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [shuffleArray, userId]);

  const handleShowMore = () => {
    const nextVisiblePosts = posts.slice(0, visiblePosts.length + 1);
    setVisiblePosts(nextVisiblePosts);
    setShowMore(nextVisiblePosts.length < posts.length);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "70vw", lg: "50vw" },
            height: "100%",
            margin: "0",
          }}
        >
          <Grid container>
            {visiblePosts.map((post, index) => (
              <React.Fragment key={post._id}>
                <Post post_={post} userId={post.user.userId} />
                {index === visiblePosts.length - 1 && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {showMore && (
                      <IconButton
                        onClick={handleShowMore}
                        sx={{ display: "block" }}
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
