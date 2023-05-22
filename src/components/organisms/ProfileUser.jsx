import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";
import ProfileDetails from "../molecules/ProfileDetails";
import ProfileEdit from "./ProfileEdit";
import { useDispatch, useSelector } from "react-redux";
import { LoadingScreen } from "../atoms/LoadingScreen";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineUserRemove } from "react-icons/hi";
import { addFriend, removeFriend } from "../../storage/authReducers";

const ProfileUser = ({ profile }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [error, setError] = useState("");
  const isFriend = () => {
    return user.friends.some((friend) => friend.friendId === profile._id);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  if (!user || !profile) return <LoadingScreen />;
  if (isEdit) return <ProfileEdit setIsEdit={setIsEdit} />;

  const onAddFriend = async () => {
    try {
      dispatch(addFriend(profile._id));
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const onRemoveFriend = async () => {
    try {
      dispatch(removeFriend(profile._id));
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "5rem 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "2rem 2rem",
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
          }}
        >
          <ProfilePictureUpload profile={profile} />
          <div
            style={{ borderRight: "1px solid #ccc", margin: "0 1rem" }}
          ></div>
          <ProfileDetails profile={profile} />
        </Paper>
        {profile._id === user._id ? (
          <Button
            variant="contained"
            color="success"
            sx={{ width: { xs: "90vw", lg: "30vw" } }}
            onClick={handleEdit}
          >
            Edit profile
          </Button>
        ) : !isFriend() ? (
          <IconButton onClick={onAddFriend}>
            <AiOutlineUserAdd style={{ color: "green" }} />
          </IconButton>
        ) : (
          <IconButton onClick={onRemoveFriend}>
            <HiOutlineUserRemove style={{ color: "red" }} />
          </IconButton>
        )}
      </Box>
      {error && error !== "" && (
        <Typography
          sx={{ textAlign: "center", color: "red" }}
          position={"center"}
          variant="h5"
        >
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default ProfileUser;
