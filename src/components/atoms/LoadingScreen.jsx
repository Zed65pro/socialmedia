import { Box, Typography } from "@mui/material";
import React from "react";
import LoadingCircle from "./LoadingCircle";
import backgroundImage from "../../assets/fig.jpeg";

export const LoadingScreen = ({ label }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: label ? `url(${backgroundImage})` : "",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        imageRendering: "auto",
        backgroundColor: "black",
      }}
    >
      {label && (
        <Typography variant="h4" color="white">
          {label}
        </Typography>
      )}
      <LoadingCircle />
    </Box>
  );
};
