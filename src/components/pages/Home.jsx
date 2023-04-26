import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Paper, Typography } from "@mui/material";
import { logout } from "../../storage/useLogin";
import { constants } from "../../constants";
import { getToken, getUser } from "../../storage/authStorage";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader);
  const error = useSelector((state) => state.error);

  console.log(getUser());

  useEffect(() => {
    !getToken() && navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
  }, [navigate]);

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <>
      {getUser() && (
        <Box>
          {loading && <p>Loading...</p>}
          <Paper>
            <Typography>{`${getUser()} has logged in.`}</Typography>
            <Button onClick={onLogout}>Logout</Button>
            {error && (
              <Typography
                sx={{ textAlign: "center", color: "red" }}
                position={"center"}
                variant="h5"
              >
                {error}
              </Typography>
            )}
          </Paper>
        </Box>
      )}
    </>
  );
};

export default Home;
