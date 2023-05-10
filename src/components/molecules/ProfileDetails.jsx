import { EmailOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const ProfileDetails = ({ user }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <EmailOutlined size="25" />
        <Typography sx={{ ml: "5px" }}>{user.email}</Typography>
      </Box>
      <hr
        style={{
          border: "none",
          borderBottom: "1px solid #ccc",
          margin: "1rem 0",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FiUser size="25" />
        <Typography sx={{ ml: "5px" }}>{user.username}</Typography>
      </Box>
      <hr
        style={{
          border: "none",
          borderBottom: "1px solid #ccc",
          margin: "1rem 0",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <BsFileEarmarkPostFill size="25" />
        <Typography sx={{ ml: "5px" }}>{user.posts.length}</Typography>
      </Box>
      <hr
        style={{
          border: "none",
          borderBottom: "1px solid #ccc",
          margin: "1rem 0",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FaUserFriends size="25" />
        <Typography sx={{ ml: "5px" }}>{user.friends.length}</Typography>
      </Box>
      <hr
        style={{
          border: "none",
          borderBottom: "1px solid #ccc",
          margin: "1rem 0",
        }}
      />
    </Box>
  );
};

export default ProfileDetails;
