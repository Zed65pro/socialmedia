import React from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import LinkAtom from "../atoms/LinkAtom";
// import {HashLink as Link} from 'react-router-hash-link'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "rgb(30, 70, 74)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LinkAtom to="/">JAFRA TECHNICAL</LinkAtom>
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button color="inherit">
              <LinkAtom to="/signin">Sign in</LinkAtom>
            </Button>
            <Button color="inherit">
              <LinkAtom to="/">About</LinkAtom>
            </Button>
            <Button color="inherit">
              <LinkAtom to="/">Projects</LinkAtom>
            </Button>
            <Button color="inherit">
              <LinkAtom to="/">Contacts</LinkAtom>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
