import React, { useState } from "react";
import { Box, Stack, Typography, Paper, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { logout } from "../../storage/authReducers";
import { ads } from "../../ads";

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
        <Typography variant="h4" color="primary">
          Sponsered
        </Typography>
        <hr style={{ margin: "1rem 0" }} />
        {ads.map((ad) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href={ad.link}
              target="_blank"
              rel="noopener noreferrer"
              key={ad.alt}
            >
              <img
                src={ad.path}
                alt={ad.alt}
                style={{
                  marginBottom: "2rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "10%",
                }}
                width="100%"
                height="200px"
              />
            </a>
          </Box>
        ))}
      </Box>
      <hr />
      <Box>
        <Button
          onClick={onLogout}
          sx={{ display: "flex", alignItems: "center", margin: "1rem 0" }}
        >
          <FiLogOut size="35" style={{ margin: "0 1rem" }} />
          <Typography>Logout</Typography>
        </Button>
      </Box>
    </Stack>
  );
};

export default LeftPanel;
