import { Grid, Typography } from "@mui/material";
import React from "react";

const BackgroundSplit = ({ url, ...props }) => {
  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: url,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        position: "relative",
      }}
      {...props}
    />
  );
};

export default BackgroundSplit;
