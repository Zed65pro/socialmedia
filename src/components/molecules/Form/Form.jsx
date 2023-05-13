import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Grid, Avatar, Typography, Paper, Button, Box } from "@mui/material";
import Copyright from "../../atoms/Copyright";
import { Link } from "react-router-dom";
import BackgroundSplit from "../../atoms/BackgroundSplit";
import { makeStyles } from "@mui/styles";
import { reset_error } from "../../../storage/useLogin";
import { useDispatch } from "react-redux";

const Form = ({ children, link, linkText, type, onSubmit, handleSubmit }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <BackgroundSplit
        url={require("../../../assets/background/intro-bg.jpg")}
        className={classes.background}
      />
      <Grid item sm={12} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography align="center" variant="h3" sx={{ color: "#414241" }}>
            SOCIALIX
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {type}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            {children}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {type}
            </Button>
            <Link
              onClick={() => dispatch(reset_error())}
              to={{ pathname: link }}
              style={{ color: "#141473" }}
            >
              {linkText}
            </Link>
            <Copyright />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  background: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default Form;
