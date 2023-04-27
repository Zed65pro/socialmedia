import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { getUser } from "../../storage/authStorage.js";

const Feed = ({ onLogout }) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      sx={{
        marginTop: "10%",
        height: "100vh",
      }}
    >
      <Paper
        elevation="4"
        sx={{
          margin: "0 10%",
          padding: "5%",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">{`${getUser()} has logged in.`}</Typography>
        <Button
          variant="contained"
          onClick={onLogout}
          sx={{ margin: "2rem 0", fontSize: "2rem" }}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default Feed;
