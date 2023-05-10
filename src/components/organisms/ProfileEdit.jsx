import { Box, Typography } from "@mui/material";
import React from "react";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";

const ProfileEdit = ({ user }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProfilePictureUpload />
      <Typography>{user.username}</Typography>
    </Box>
  );
};

export default ProfileEdit;
