import React, { useState } from "react";
import { Box, Stack, Typography, Paper, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { logout } from "../../storage/authReducers";

const LeftPanel = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <Stack
      sx={{
        width: "20%",
        height: "100vh",
        padding: "3rem",
        display: { xs: "none", sm: "none", md: "none", lg: "block" },
      }}
      elevation={3}
      component={Paper}
    >
      <Box>
        <Button
          onClick={onLogout}
          sx={{ display: "flex", alignItems: "center", margin: "1rem 0" }}
        >
          <FiLogOut size="35" style={{ margin: "0 1rem" }} />
          <Typography>Logout</Typography>
        </Button>
      </Box>
      <hr />
    </Stack>
  );
};

export default LeftPanel;
