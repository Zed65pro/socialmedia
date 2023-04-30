import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Posts from "../organisms/Posts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../utils/fetchUser";

const Feed = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    !user && fetchUser(navigate);
  }, []);
  return (
    <Box
      sx={{
        marginTop: "10%",
        height: "100vh",
      }}
    >
      <Posts />
    </Box>
  );
};

export default Feed;
