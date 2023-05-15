import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiDislike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../storage/authReducers.js";
import { Link, useNavigate } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
import DividerAtom from "../atoms/DividerAtom.jsx";
import { FiLogOut } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import ProfilePictureUpload from "./ProfilePictureUpload.jsx";
import { AiOutlineLike } from "react-icons/ai";
import { constants } from "../../constants.js";
import api from "../../api/api.js";
import { fetchPostById } from "../../utils/fetchPost";
import { LoadingScreen } from "../atoms/LoadingScreen.jsx";
import LoadingCircle from "../atoms/LoadingCircle.jsx";
import background from "../../assets/AnkaraUniv.png";
import { fetchUser } from "../../utils/fetchUser.js";
import PostOverlay from "./PostOverlay.jsx";
import { useLikeDislike } from "../../hooks/likesAndDislikes.js";

const Post = memo(({ post_, username, postId, userId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [postUser, setPostUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [post, setPost] = useState(post_);
  const [showOverlay, setShowOverlay] = useState(false);

  const { likesCount, isLiked, dislikesCount, isDisliked, onLike, onDislike } =
    useLikeDislike(post_, userId);

  useEffect(() => {
    async function fetchData() {
      let postUser_ = null;

      if (postId) {
        postUser_ = await api.get(`/users/${userId}`);
      }

      setLoading(false);
      setPostUser(postUser_.data);
    }
    fetchData();
  }, []);

  const toggleOverlay = () => {
    setShowOverlay((prev) => !prev);
  };

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  const onDeletePost = async () => {
    await api.delete(`/post/${postId}`);
    setPost(null);
  };

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "30vh",
        }}
      >
        <LoadingCircle />;
      </Box>
    );

  return (
    <>
      {showOverlay && (
        <PostOverlay
          onClose={toggleOverlay}
          post={post}
          postUser={postUser}
          profilePicture={postUser.profilePicture}
        />
      )}
      {post && postUser && (
        <Grid item xs={12}>
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(90deg, rgba(40, 120, 150, 0.91) 15%, rgba(0,0,0,1) 85%)",
              padding: "2rem",
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
                <ProfilePictureUpload profile={postUser} size={45} margin={2} />
                {/* <IconButton
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
                </IconButton> */}
                <Typography
                  variant="h6"
                  sx={{
                    mr: "5px",
                  }}
                >
                  <Link
                    to={`${constants.BASE_URL}/${constants.USER}/${userId}`}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      ":hover": {
                        color: "grey",
                      },
                    }}
                  >
                    {username}
                  </Link>
                </Typography>
              </Box>
              {user._id === post.user.userId && (
                <IconButton
                  sx={{ color: "red", mr: "5px" }}
                  onClick={onDeletePost}
                >
                  <RiDeleteBin5Fill />
                </IconButton>
              )}

              <Box sx={{ display: "flex" }}>
                <IconButton sx={{ color: "#fff" }} onClick={toggleOverlay}>
                  <FiLogOut />
                </IconButton>
              </Box>
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

            {post.image && (
              <>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src={post.image}
                />

                <DividerAtom
                  light={true}
                  sx={{ backgroundColor: "#fff", opacity: "0.4" }}
                />
              </>
            )}

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
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      margin: "0 5px",
                      color: "#DEEDF0",
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
                    {likesCount}
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
                    {dislikesCount}
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
});

// const useStyles = makeStyles((theme) => ({}));

export default Post;
