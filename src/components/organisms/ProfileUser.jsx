import { Box, Button, Paper } from "@mui/material";
import React from "react";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";
import ProfileDetails from "../molecules/ProfileDetails";
import { useNavigate } from "react-router-dom";
import { constants } from "../../constants";

const ProfileUser = ({ user }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`${constants.BASE_URL}/${constants.PROFILE}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5rem 0",
      }}
    >
      <Paper elevation={3} sx={{ padding: "0rem 3rem", display: "flex" }}>
        <ProfilePictureUpload />
        <div style={{ borderRight: "1px solid #ccc", margin: "0 1rem" }}></div>
        <ProfileDetails user={user} />
      </Paper>
      <Button
        variant="contained"
        color="success"
        sx={{ width: "640px" }}
        onClick={handleEdit}
      >
        Edit profile
      </Button>
    </Box>
  );
};

export default ProfileUser;
