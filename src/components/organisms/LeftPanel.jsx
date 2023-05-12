import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";
import { BiPlus } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { constants } from "../../constants";
import { CgProfile } from "react-icons/cg";

const LeftPanel = () => {
  const user = useSelector((state) => state.user);
  const [displayedFriends, setDisplayedFriends] = useState(2);

  const friends = user.friends.slice(0, displayedFriends);
  console.log(friends);

  const handleShowMoreFriends = () => {
    if (displayedFriends + 2 <= user.friends.length) {
      setDisplayedFriends(displayedFriends + 2);
    } else {
      setDisplayedFriends(user.friends.length);
    }
  };

  return (
    <Stack
      sx={{
        width: "20%",
        height: "100vh",
        padding: "3rem",
        display: { xs: "none", sm: "none", md: "none", lg: "block" },
      }}
      elevation={3}
      component={Paper}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ProfilePictureUpload size={85} profile={user} />
        <Typography
          variant="h6"
          sx={{ marginLeft: "1rem", textTransform: "capitalize" }}
        >
          {user.username}
        </Typography>
      </Box>
      <hr />
      <Box>
        <Link
          to={`${constants.BASE_URL}/${constants.USER}/${user._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            sx={{ display: "flex", alignItems: "center", margin: "1rem 0" }}
          >
            <CgProfile size="35" style={{ margin: "0 1rem" }} />
            <Typography>Profile</Typography>
          </Button>
        </Link>
      </Box>
      <hr />
      <Box>
        <Link
          to={`${constants.BASE_URL}/${constants.FRIENDS}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            sx={{ display: "flex", alignItems: "center", margin: "1rem 0" }}
          >
            <FaUserFriends size="35" style={{ margin: "0 1rem" }} />
            <Typography>Friends</Typography>
          </Button>
        </Link>
        <hr />
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {friends.map((friend, index) => (
            <Typography key={index}>{friend.friendName}</Typography>
          ))}
          {displayedFriends < user.friends.length && (
            <IconButton onClick={handleShowMoreFriends}>
              <BiPlus />
              <Typography>Show more friends</Typography>
            </IconButton>
          )}
        </Paper>
        <hr />
      </Box>
      <Box>
        <Link
          to={`${constants.BASE_URL}/${constants.ADDPOST}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            sx={{ display: "flex", alignItems: "center", margin: "1rem 0" }}
          >
            <BiPlus size="35" style={{ margin: "0 1rem" }} />
            <Typography>Add a post</Typography>
          </Button>
        </Link>
      </Box>
      <hr />
    </Stack>
  );
};

export default LeftPanel;
