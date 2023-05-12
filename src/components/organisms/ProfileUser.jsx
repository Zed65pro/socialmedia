import { Box, Button, IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";
import ProfileDetails from "../molecules/ProfileDetails";
import { useNavigate } from "react-router-dom";
import { constants } from "../../constants";
import ProfileEdit from "./ProfileEdit";
import { useSelector } from "react-redux";
import { FaUserFriends } from "react-icons/fa";
import { LoadingScreen } from "../atoms/LoadingScreen";
import api from "../../api/api";
import { fetchUser } from "../../utils/fetchUser";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineUserRemove } from "react-icons/hi";

const ProfileUser = ({ profile }) => {
  const [isEdit, setIsEdit] = useState(false);
  const user = useSelector((state) => state.user);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isFriend = () => {
    return user.friends.some((friend) => friend.friendId === profile._id);
  };
  console.log(isFriend());

  const handleEdit = () => {
    setIsEdit(true);
  };

  if (!user || !profile) return <LoadingScreen />;
  if (isEdit) return <ProfileEdit setIsEdit={setIsEdit} />;

  const onAddFriend = async () => {
    try {
      const newUser = await api.post(`/users/${user._id}/friends`, {
        friendId: profile._id,
      });
      fetchUser(navigate);
      console.log(newUser);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const onRemoveFriend = async () => {
    try {
      const newUser = await api.delete(`/users/friends/${profile._id}`, {
        friendId: profile._id,
      });
      fetchUser(navigate);
      console.log(newUser);
    } catch (err) {
      setError(err.response.data.error);
    }
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
      <Paper elevation={3} sx={{ padding: "2rem 5rem", display: "flex" }}>
        <ProfilePictureUpload profile={profile} />
        <div style={{ borderRight: "1px solid #ccc", margin: "0 1rem" }}></div>
        <ProfileDetails profile={profile} />
      </Paper>
      {profile._id === user._id ? (
        <Button
          variant="contained"
          color="success"
          sx={{ width: "640px" }}
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
  );
};

export default ProfileUser;
