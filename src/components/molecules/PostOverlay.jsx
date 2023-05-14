import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography, TextField, Button } from "@mui/material";
import { FiX } from "react-icons/fi";
import { constants } from "../../constants.js";
import { Link, useNavigate } from "react-router-dom";
import defaultImage from "../../assets/background.jpeg";
import api from "../../api/api.js";
import FormInputText from "../atoms/Input/FormInputFIeld.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "../../Schemas/commentSchema.js";
import ProfilePictureUpload from "./ProfilePictureUpload.jsx";
import LoadingCircle from "../atoms/LoadingCircle.jsx";
import { BiDislike } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";

const PostOverlay = ({ onClose, post_, profilePicture, postUser }) => {
  const [comments, setComments] = useState(null);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [post, setPost] = useState(post_);

  console.log(isLiked, isDisliked);

  useEffect(() => {
    const fetchComments = async () => {
      let response_isLiked = null;
      let response_isDisliked = null;
      try {
        const response = await api.get(`/comments/${post._id}/comments`);
        setComments(response.data);
        response_isLiked = await api.get(`/post/liked/${post._id}`);
        response_isDisliked = await api.get(`/post/disliked/${post._id}`);
        setIsLiked(response_isLiked?.data);
        setIsDisliked(response_isDisliked?.data);
      } catch (err) {
        console.log(err);
      }
    };
    !comments && fetchComments();
  }, []);

  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      comment: "",
    },
    resolver: yupResolver(commentSchema),
  });

  const onLike = async () => {
    const response = await api.patch(`/post/likes/${post._id}`);
    setPost(response.data);
    setIsLiked((state) => !state);
    if (isDisliked) setIsDisliked((state) => !state);
  };

  const onDislike = async () => {
    const response = await api.patch(`/post/dislikes/${post._id}`);
    setPost(response.data);
    setIsDisliked((state) => !state);
    if (isLiked) setIsLiked((state) => !state);
  };

  const handleCommentSubmit = async (data, event) => {
    event.preventDefault();

    // Add logic to submit the new comment
    try {
      const response = await api.post(`/comments/${post._id}/comments`, {
        body: event.target.comment.value,
        username: postUser.username,
        profilePicture: postUser.profilePicture,
      });
      const newComment = response.data.comment;
      setComments((prevComments) => [...prevComments, newComment]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Close button */}
      <IconButton
        sx={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          color: "#000",
          backgroundColor: "#fff",
        }}
        onClick={onClose}
      >
        <FiX />
      </IconButton>
      {/* Overlay content */}
      <Box
        sx={{
          padding: "1rem",
          width: "90%",
          height: "100%",
          maxHeight: "70vh",
          maxWidth: "800px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          gap: "1rem",
          overflow: "hidden",
        }}
      >
        {/* Post picture */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey",
          }}
        >
          <img
            src={post.image ? post.image : defaultImage}
            alt="Post"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "500px",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Box>
          {/* Post information */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {profilePicture && (
                <img
                  src={profilePicture}
                  alt="Profile"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    marginRight: "0.5rem",
                  }}
                />
              )}
              <Link
                to={`${constants.BASE_URL}/${constants.USER}/${post.user.userId}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="subtitle1" sx={{ marginBottom: "0.5rem" }}>
                  {post.user.username}
                </Typography>
              </Link>
            </Box>

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
                    <AiOutlineLike size="25" style={{ color: "black" }} />
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
                    <BiDislike size="25" style={{ color: "black" }} />
                  ) : (
                    <BiDislike size="25" style={{ color: "red" }} />
                  )}
                </Box>
              </IconButton>
            </Box>

            <Typography variant="subtitle2" sx={{ marginTop: "1rem" }}>
              {post.body}
            </Typography>
            <hr sx={{ margin: "1rem 0" }} />
          </Box>
          {/* Comment section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1rem",
              height: "250px",
              maxHeight: "250px", // Set the desired height here
              overflow: "auto", // Enable scrolling
            }}
          >
            {/* Display comments here */}
            {comments ? (
              comments.map((comment) => (
                <Box
                  key={comment._id}
                  sx={{
                    backgroundColor: "#f0f2f5",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        //   justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <IconButton>
                        <ProfilePictureUpload
                          profile={postUser}
                          size="35"
                          margin={2}
                        />
                      </IconButton>
                      <Typography>{postUser.username}</Typography>
                    </Box>
                    <hr style={{ marginBottom: "1rem" }} />
                    <Typography variant="body2">{comment.body}</Typography>
                  </Box>
                </Box>
              ))
            ) : (
              <LoadingCircle />
            )}
          </Box>
          {/* Add comment */}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(handleCommentSubmit)}
            sx={{ padding: "1rem" }}
          >
            <FormInputText
              control={control}
              name="comment"
              label="Add a comment"
              sx={{ marginBottom: "1rem" }}
              fullWidth
              variant="outlined"
              rows={3}
              multiline
              autoFocus
            />
            <Button type="submit" variant="contained" color="primary">
              Post
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostOverlay;
