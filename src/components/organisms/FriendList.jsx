import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../utils/fetchUser";
import { constants } from "../../constants";

const FriendList = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    !user && fetchUser(navigate);
  }, []);

  const onVisit = (friendId) => {
    navigate(`${constants.BASE_URL}/${constants.USER}/${friendId}`);
  };

  const friendCheck = () => {
    if (user && user.friends.length !== 0) {
      return (
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {user.friends.map((friend, index) => (
            <Grid item key={friend.friendId} sx={{ margin: "4rem 0" }}>
              <Paper sx={{ padding: "2rem" }}>
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
              </Paper>
            </Grid>
          ))}
        </Grid>
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
