import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, logout } from "../../storage/authReducers";
import { constants } from "../../constants";
import { getToken } from "../../storage/authStorage";
import Navbar from "../organisms/Navbar/Navbar";
import Footer from "../organisms/Footer/Footer";
import Feed from "../templates/Feed";
import { Box, Button, Typography } from "@mui/material";
import { fetchUser } from "../../utils/fetchUser";
import AllPosts from "../organisms/AllPosts";
import SearchBar from "../organisms/SearchBar";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader);
  const error = useSelector((state) => state.error);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    !user && navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
    !user && fetchUser(navigate);
  }, []);

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <>
      {user && (
        <>
          {loading && <p>Loading...</p>}
          <Navbar onLogout={onLogout} />
          {/* <Feed /> */}
          <SearchBar />
          <AllPosts />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
