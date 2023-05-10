import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { fetchUser } from "../../utils/fetchUser";
import AllPosts from "../organisms/AllPosts";
import ProfileEdit from "../organisms/ProfileEdit";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  const loading = useSelector((state) => state.loader);
  const error = useSelector((state) => state.error);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    !user && fetchUser(navigate);
    user && fetchUser(navigate, { id, setProfile });
    if (profile) console.log(profile);
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      <Navbar />

      {profile && (
        <Box>
          <ProfileEdit user={profile} />
          <AllPosts userId={profile._id} />
        </Box>
      )}
      {error && (
        <Typography
          sx={{ textAlign: "center", color: "red" }}
          position={"center"}
        >
          {error.message}
        </Typography>
      )}
    </>
  );
};

export default Profile;
