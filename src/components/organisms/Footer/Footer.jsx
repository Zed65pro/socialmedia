import { Box, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Divider light={true} className={classes.divider} />
      <Box>
        <Box className={classes.icons}>
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
        <Typography variant="h6" sx={{ fontSize: ".8rem" }}>
          Zaid Ibaisi © 2023
        </Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    bottom: 0,
    left: 0,
    width: "100%",
    color: "white",
    textAlign: "center",
    background:
      "linear-gradient(90deg, rgba(241, 134, 13, 0.8) 15%, rgba(94,22,66,1) 85%)",
    padding: "0 4rem",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
  phone: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#fff",
    width: "50%",
    marginBottom: "10px!important",
    opacity: 0.6,
  },
}));

export default Footer;
