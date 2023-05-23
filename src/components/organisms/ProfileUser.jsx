import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";
import ProfileDetails from "../molecules/ProfileDetails";
import ProfileEdit from "./ProfileEdit";
import { useDispatch, useSelector } from "react-redux";
import { LoadingScreen } from "../atoms/LoadingScreen";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineUserRemove } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../utils/fetchUser";
import { addFriend, removeFriend } from "../../storage/userReducers";

const ProfileUser = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [profile, setProfile] = useState(user._id === id ? user : null);

  useEffect(() => {
    if (!profile && id) {
      fetchUser(navigate, { id, setProfile });
    }
  }, [id, profile, navigate]);

  const isFriend = () => {
    return user.friends.some((friend) => friend.friendId === profile._id);
  };

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

  const handleEdit = () => {
    setIsEdit(true);
  };

  if (!profile) return <LoadingScreen />;
  else if (isEdit)
    return <ProfileEdit setIsEdit={setIsEdit} setProfile={setProfile} />;

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
          width: "100%",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "2rem 2rem",
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "column",
            },
          }}
        >
          <ProfilePictureUpload profile={profile} />
          <div
            style={{ borderRight: "1px solid #ccc", margin: "0 1rem" }}
          ></div>
          <ProfileDetails profile={profile} />
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
        </Paper>
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
