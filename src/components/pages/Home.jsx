import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../storage/useLogin";
import { constants } from "../../constants";
import { getToken, getUser } from "../../storage/authStorage";
import Navbar from "../organisms/Navbar/Navbar";
import Footer from "../organisms/Footer/Footer";
import Feed from "../templates/Feed";
import { Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    !getToken() && navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
  }, [navigate]);

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <>
      {getUser() && (
        <>
          {loading && <p>Loading...</p>}
          <Navbar onLogout={onLogout} />
          <Feed onLogout={onLogout} />
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
