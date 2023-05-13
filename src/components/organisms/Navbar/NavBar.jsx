import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import MenuListComposition from "../Menu/Menu";
import { constants } from "../../../constants.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../../utils/fetchUser";
import { logout } from "../../../storage/authReducers";
import ProfilePictureUpload from "../../molecules/ProfilePictureUpload";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    !user && fetchUser(navigate);
  }, []);

  const onLogout = () => {
    dispatch(logout(navigate));
  };

  const classes = useStyles();

  return (
    <>
      {user && (
        <Box sx={{ marginBottom: { xs: "40%", md: "20%", lg: "10%" } }}>
          <AppBar className={classes.root}>
            <Toolbar xs={12} className={classes.navbar}>
              <Link
                to={`${constants.BASE_URL}/${constants.HOME}`}
                className={`${classes.title} ${classes.nav_element}`}
              >
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                  SOCIALIX
                </Typography>
              </Link>
              <Box className={classes.nav_elements}>
                <Link
                  to={`${constants.BASE_URL}/${constants.HOME}`}
                  className={classes.nav_element}
                >
                  <FaHome size="35" className={classes.icon} />
                </Link>
                <Link
                  to={`${constants.BASE_URL}/${constants.USER}/${user._id}`}
                  className={classes.nav_element}
                >
                  <CgProfile size="35" className={classes.icon} />
                </Link>
                <MenuListComposition onLogout={onLogout} />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(36,94,156)",
    background:
      "linear-gradient(90deg, rgba(20, 163, 214, 0.91) 15%, rgba(0,0,0,1) 85%)",
    // borderBottomRightRadius: "5px",
    // borderBottomLeftRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // [theme.breakpoints.down("1024")]: {
    //   display: "none!important",
    // },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  nav_elements: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav_element: {
    textDecoration: "none",
    margin: "0 1rem!important",
  },
  title: {
    margin: "2rem!important",
    color: "white",
    transition: "color 0.4s ease-out",
    "&:hover": {
      color: "#666",
    },
    [theme.breakpoints.down("1100")]: {
      display: "none!important",
    },
  },
  icon: {
    color: "white",
    transition: "color 0.2s ease-out",
    "&:hover": {
      color: "#666",
    },
  },
}));

export default Navbar;
