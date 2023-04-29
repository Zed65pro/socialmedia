import { Box, IconButton, Paper, Typography } from "@mui/material";
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
  // const classes = useStyles();
  const [post, setPost] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // fetchPost(postId);
      const post = await fetchPost(postId);
      setPost(post);
    }
    fetchData();
  }, []);

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  const onDeletePost = async () => {
    await api.delete(`/post/${postId}`);
  };

  return (
    <>
      {post && user && (
        <Paper
          elevation={5}
          sx={{
            width: "50vw",
            padding: "1rem",
            margin: "1rem auto",
            height: { lg: "50vh", md: "90vh" },
            display: "flex",
            flexDirection: "column",
            background: [
              "rgb(0,0,0)",
              "linear-gradient(90deg, rgba(0,0,0,1) 23%, rgba(36,94,156,1) 68%)",
            ],
          }}
        >
          <Box sx={{ display: "flex" }}>
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
            <IconButton sx={{ color: "red", mr: "5px" }} onClick={onDeletePost}>
              <RiDeleteBin5Fill />
            </IconButton>

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
            <Typography variant="h6" sx={{ color: "white", fontSize: "1rem" }}>
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
            <IconButton sx={{ color: "#fff" }} onClick={onLogout}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "1rem", mr: "5px" }} color="green">
                  {post.likes}
                </Typography>
                <AiOutlineLike size="25" />
              </Box>
            </IconButton>
            <IconButton sx={{ color: "#fff" }} onClick={onLogout}>
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
                  {post.dislikes}
                </Typography>
                <BiDislike size="25" />
              </Box>
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
};

// const useStyles = makeStyles((theme) => ({}));

export default Post;
