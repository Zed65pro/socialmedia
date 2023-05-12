import { Box } from "@mui/material";
import React from "react";
import LoadingCircle from "./LoadingCircle";

export const LoadingScreen = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingCircle />;
    </Box>
  );
};
