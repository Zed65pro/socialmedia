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

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader);
  const error = useSelector((state) => state.error);
  const user = useSelector((state) => state.user);
  const [isUser, setIsUser] = useState(false);

  const onGetUser = () => {
    setIsUser(true);
    dispatch(getCurrentUser(navigate));
  };

  useEffect(() => {
    !getToken() && navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
  }, [navigate, user]);

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <>
      {getToken() && (
        <>
          {loading && <p>Loading...</p>}
          <Navbar onLogout={onLogout} />
          <Feed />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "5rem",
            }}
          >
            <Button variant="contained" color="secondary" onClick={onGetUser}>
              GET THE USER
            </Button>
            {user && isUser && (
              <Box>
                <Typography>{user.username}</Typography>
                <Typography>{user.email}</Typography>
              </Box>
            )}
          </Box>
          <Footer />
          {error && (
            <Typography
              sx={{ textAlign: "center", color: "red" }}
              position={"center"}
              variant="h5"
            >
              {error}
            </Typography>
          )}
        </>
      )}
    </>
  );
};

export default Home;
