import React from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "rgb(30, 70, 74)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            color="primary"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/signin" style={{ color: "#141473" }}>
              SOCIALIX
            </Link>
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button color="inherit">
              <Link to="/signin" style={{ color: "#141473" }}>
                Feed
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/signin" style={{ color: "#141473" }}>
                Profile
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/signin" style={{ color: "#141473" }}>
                Settings
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
