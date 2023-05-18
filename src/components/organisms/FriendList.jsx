import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { constants } from "../../constants";

const FriendList = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const onVisit = (friendId) => {
    navigate(`${constants.BASE_URL}/${constants.USER}/${friendId}`);
  };

  const friendCheck = () => {
    if (user && user.friends.length !== 0) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {user.friends.map((friend, index) => (
            <Box
              key={friend.friendId}
              sx={{
                width: "40%",
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "2rem 0",
              }}
              elevation={3}
            >
              {/* <Typography>: {index + 1}</Typography> */}
              <Typography sx={{ mb: "1rem" }}>
                Username: {friend.friendName}
              </Typography>
              <Typography sx={{ mb: "1rem" }}>
                Email: {friend.friendEmail}
              </Typography>

              <Button
                onClick={() => onVisit(friend.friendId)}
                variant={"contained"}
              >
                Visit Profile
              </Button>
              <hr
                style={{
                  width: "100%",
                  margin: "1rem 0",
                }}
              />
            </Box>
          ))}
        </Box>
      );
    }

    return (
      <Typography sx={{ margin: "4rem 0", textAlign: "center", width: "100%" }}>
        User has no friends
      </Typography>
    );
  };

  return <div>{friendCheck()}</div>;
};

export default FriendList;
