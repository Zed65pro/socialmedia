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
import { Link, useNavigate } from "react-router-dom";
import { constants } from "../../constants";
import { CgProfile } from "react-icons/cg";
import { makeStyles } from "@mui/styles";
import AddPostOverlay from "../molecules/AddPostOverlay";

const LeftPanel = () => {
  const user = useSelector((state) => state.user);
  const [displayedFriends, setDisplayedFriends] = useState(2);
  const navigate = useNavigate();
  const friends = user.friends.slice(0, displayedFriends);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleShowMoreFriends = () => {
    if (displayedFriends + 2 <= user.friends.length) {
      setDisplayedFriends(displayedFriends + 2);
    } else {
      setDisplayedFriends(user.friends.length);
    }
  };

  // const toggleOverlay = () => {
  //   setShowOverlay((prev) => !prev);
  // };

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
      {/* {showOverlay && <AddPostOverlay onClose={toggleOverlay} />} */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ProfilePictureUpload size={85} profile={user} />
        <Typography
          variant="h5"
          sx={{ marginLeft: "1rem", textTransform: "capitalize" }}
        >
          {user.username}
        </Typography>
      </Box>
      <hr />
      <Box>
        <Button sx={{ margin: "3rem 0" }}>
          <Link
            to={`${constants.BASE_URL}/${constants.USER}/${user._id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CgProfile size="35" style={{ margin: "0 1rem" }} />
            <Typography>Profile</Typography>
          </Link>
        </Button>
      </Box>
      <hr />
      <Box>
        <Button sx={{ margin: "3rem 0" }}>
          <Link
            to={`${constants.BASE_URL}/${constants.ADDPOST}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <BiPlus size="35" style={{ margin: "0 1rem" }} />
            <Typography>Add a post</Typography>
          </Link>
        </Button>
      </Box>
      <hr />
      <Box>
        <Button sx={{ margin: "3rem 0" }}>
          <Link
            to={`${constants.BASE_URL}/${constants.FRIENDS}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaUserFriends size="35" style={{ margin: "0 1rem" }} />
            <Typography>Friends</Typography>
          </Link>
        </Button>
        <hr />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // backgroundColor: "grey",
          }}
        >
          {friends.map((friend, index) => (
            <Button
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              color="success"
              onClick={() =>
                navigate(
                  `${constants.BASE_URL}/${constants.USER}/${friend.friendId}`
                )
              }
              key={index}
            >
              <Typography>{friend.friendName}</Typography>
              <hr style={{ width: "100%" }} />
            </Button>
          ))}
          {displayedFriends < user.friends.length && (
            <IconButton onClick={handleShowMoreFriends}>
              <BiPlus />
              <Typography>Show more friends</Typography>
            </IconButton>
          )}
        </Box>
        {user.friends.length <= 0 && <hr />}
      </Box>
    </Stack>
  );
};

export default LeftPanel;
