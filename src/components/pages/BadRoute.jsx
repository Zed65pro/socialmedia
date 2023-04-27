import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const BadRoute = ({ link }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#5B5959",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "main.secondary",
            fontSize: "4rem",
          }}
        >
          You have accessed a wrong route!
        </Typography>
        <Button
          onClick={() => navigate(link)}
          color="primary"
          variant="outlined"
          sx={{ padding: "1rem", margin: "4rem 0" }}
        >
          Go back to the home screen
        </Button>
      </Paper>
    </Box>
  );
};

export default BadRoute;
