import { Grid } from "@mui/material";
import React from "react";

const BackgroundSplit = ({ url, ...props }) => {
  console.log(url);

  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      {...props}
    >
      <img
        src={url}
        alt="Background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          imageRendering: [
            "-webkit-optimize-contrast",
            "crisp-edges",
            "pixelated",
          ],
        }}
      />
    </Grid>
  );
};

export default BackgroundSplit;
