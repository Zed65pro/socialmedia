import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiDislike } from "react-icons/bi";
import { IoPersonAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../storage/authReducers.js";
import { Link, useNavigate } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
import DividerAtom from "../atoms/DividerAtom.jsx";
import { FiLogOut } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { AiOutlineLike } from "react-icons/ai";
import { constants } from "../../constants.js";
import api from "../../api/api.js";
import { fetchPost } from "../../utils/fetchPost";

const Post = ({ username, postId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [post, setPost] = useState(null);
  // const classes = useStyles();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  useEffect(() => {
    async function fetchData() {
      // fetchPost(postId);
      let post = null;
      let response_isDisliked = null;
      let response_isLiked = null;
      if (postId) {
        post = await fetchPost(postId);
        response_isLiked = await api.get(`/post/liked/${post._id}`);
        response_isDisliked = await api.get(`/post/disliked/${post._id}`);
      }

      setIsLiked(response_isLiked?.data);
      setIsDisliked(response_isDisliked?.data);
      setPost(post);
    }
    fetchData();
  }, []);

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  const onLike = async () => {
    const response = await api.patch(`/post/likes/${post._id}`);
    const updatedPost = response.data;
    setPost(updatedPost);
    setIsLiked((state) => !state);
    if (isDisliked) setIsDisliked((state) => !state);
  };

  const onDislike = async () => {
    const response = await api.patch(`/post/dislikes/${post._id}`);
    const updatedPost = response.data;
    setPost(updatedPost);
    setIsDisliked((state) => !state);
    if (isLiked) setIsLiked((state) => !state);
  };

  const onDeletePost = async () => {
    await api.delete(`/post/${postId}`);
    setPost(null);
  };

  return (
    <>
      {post && user && (
        <Grid item xs={12} md={6}>
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(90deg, rgba(40, 120, 150, 0.91) 15%, rgba(0,0,0,1) 85%)",
              padding: "1rem",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <IconButton
                  onClick={onLogout}
                  sx={{
                    color: "#fff",
                    trasition: "all 0.3 ease-in",
                    "&:hover": {
                      backgroundColor: "#777",
                    },
                    mr: "5px",
                  }}
                >
                  <CgProfile size="35" />
                </IconButton>
                <Typography
                  variant="h6"
                  sx={{ color: "white!important", mr: "5px" }}
                >
                  {username}
                </Typography>
              </Box>
              {user._id === post.userId && (
                <IconButton
                  sx={{ color: "red", mr: "5px" }}
                  onClick={onDeletePost}
                >
                  <RiDeleteBin5Fill />
                </IconButton>
              )}

              {/* <Box sx={{ display: "flex" }}>
          <IconButton
            sx={{ backgroundColor: "green", color: "#fff", mr: "5px" }}
            onClick={onLogout}
          >
            <IoPersonAddOutline />
          </IconButton>

          <IconButton
            sx={{ backgroundColor: "#ff3d00", color: "#fff" }}
            onClick={onLogout}
          >
            <FiLogOut />
          </IconButton>
        </Box> */}
            </Box>
            <DividerAtom
              light={true}
              sx={{ backgroundColor: "#fff", opacity: "0.4" }}
            />
            <Box
              sx={{
                display: "flex",
                height: "100%",
                width: "100%",
                p: "1rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontSize: "1rem" }}
              >
                {post.body}
              </Typography>
            </Box>
            <DividerAtom
              light={true}
              sx={{ backgroundColor: "#fff", opacity: "0.4" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {post?.hashtags?.map((hashtag) => (
                <Link
                  key={hashtag}
                  to={`${constants.BASE_URL}/${constants.HOME}`}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      margin: "0 5px",
                      color: "#DDD",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  >{`#${hashtag}`}</Typography>
                </Link>
              ))}
            </Box>
            <DividerAtom
              light={true}
              sx={{ backgroundColor: "#fff", opacity: "0.4" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <IconButton sx={{ color: "#fff" }} onClick={onLike}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "1rem", mr: "5px" }}
                    color="green"
                  >
                    {post.likesCount}
                  </Typography>
                  {!isLiked ? (
                    <AiOutlineLike size="25" />
                  ) : (
                    <AiOutlineLike size="25" style={{ color: "green" }} />
                  )}
                </Box>
              </IconButton>
              <IconButton sx={{ color: "#fff" }} onClick={onDislike}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "1rem", mr: "5px" }}
                    color="secondary"
                  >
                    {post.dislikesCount}
                  </Typography>
                  {!isDisliked ? (
                    <BiDislike size="25" />
                  ) : (
                    <BiDislike size="25" style={{ color: "red" }} />
                  )}
                </Box>
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      )}
    </>
  );
};

// const useStyles = makeStyles((theme) => ({}));

export default Post;
