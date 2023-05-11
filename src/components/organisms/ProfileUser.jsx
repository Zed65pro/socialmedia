import { Box, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";
import ProfileDetails from "../molecules/ProfileDetails";
import { useNavigate } from "react-router-dom";
import { constants } from "../../constants";
import ProfileEdit from "./ProfileEdit";
import { useSelector } from "react-redux";

const ProfileUser = ({ profile }) => {
  const [isEdit, setIsEdit] = useState(false);
  const user = useSelector((state) => state.user);
  const handleEdit = () => {
    setIsEdit(true);
  };

  if (!user || !profile) return <div>User not fetched yet amk.</div>;

  if (isEdit) return <ProfileEdit setIsEdit={setIsEdit} />;

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
        <ProfilePictureUpload profile={profile} />
        <div style={{ borderRight: "1px solid #ccc", margin: "0 1rem" }}></div>
        <ProfileDetails profile={profile} />
      </Paper>
      {profile._id === user._id && (
        <Button
          variant="contained"
          color="success"
          sx={{ width: "640px" }}
          onClick={handleEdit}
        >
          Edit profile
        </Button>
      )}
    </Box>
  );
};

export default ProfileUser;
