import React from "react";
import { Box, Link, Typography } from "@mui/material";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Copyright(props) {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "4rem 5px 0 0 ",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://www.linkedin.com/in/zaid-ibaisi-35592115b"}
          rel="noreferrer"
        >
          <AiOutlineLinkedin size="30" />
        </a>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://www.instagram.com/zaidibs_155/"}
          rel="noreferrer"
        >
          <AiOutlineInstagram size="30" />
        </a>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/Zed65pro"}
          rel="noreferrer"
        >
          <AiOutlineGithub size="30" />
        </a>
      </Box>
      <Box>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: "10px" }}
          {...props}
        >
          {"Copyright © "}
          <Link color="inherit" href="https://mui.com/">
            Zaid Ibaisi
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Box>
  );
}

export default Copyright;
