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

const Home = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    !getToken() && navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
    !user && fetchUser(navigate);
  }, []);

  if (!user) return <div>User not fetched yet amk.</div>;

  return (
    <>
      <Navbar />
      <SearchBar />
      <AllPosts />
      <Footer />
    </>
  );
};

export default Home;
