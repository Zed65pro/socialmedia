import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { constants } from "../../constants";
import { getToken } from "../../storage/authStorage";
import Navbar from "../organisms/Navbar/NavBar";
import Footer from "../organisms/Footer/Footer";
import Feed from "../templates/Feed";
import { Box, Button, Typography } from "@mui/material";
import { fetchUser } from "../../utils/fetchUser";
import AllPosts from "../organisms/AllPosts";
import SearchBar from "../organisms/SearchBar";
import LeftPanel from "../organisms/LeftPanel";
import RightPanel from "../organisms/RightPanel";
import LoadingCircle from "../atoms/LoadingCircle";
import { LoadingScreen } from "../atoms/LoadingScreen";

const Home = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    !getToken() && navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
    !user && fetchUser(navigate);
  }, []);

  if (!user) return <LoadingScreen />;

  return (
    <>
      <Navbar />
      {loading && <LoadingCircle />}
      <SearchBar />
      <hr style={{ margin: "3rem 0" }} />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <LeftPanel />
        <AllPosts />
        <RightPanel />
      </Box>

      <Footer />
    </>
  );
};

export default Home;
