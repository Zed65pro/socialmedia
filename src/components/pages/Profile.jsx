import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar/NavBar";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { fetchUser } from "../../utils/fetchUser";
import AllPosts from "../organisms/AllPosts";
import ProfileUser from "../organisms/ProfileUser";
import Footer from "../organisms/Footer/Footer";
import { LoadingScreen } from "../atoms/LoadingScreen";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) {
      fetchUser(navigate);
    } else if (!profile && id) {
      fetchUser(navigate, { id, setProfile });
    }

    return () => {
      if (profile) {
        setProfile(null); // Reset profile state to null when navigating away
      }
    };
  }, [user, id, profile, navigate]);

  if (!user || !profile) return <LoadingScreen />;
  return (
    <>
      <Navbar />
      <Box>
        <ProfileUser profile={profile} />
        <hr />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AllPosts userId={profile._id} />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Profile;