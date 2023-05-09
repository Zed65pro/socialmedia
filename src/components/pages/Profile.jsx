import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { fetchUser } from "../../utils/fetchUser";
import AllPosts from "../organisms/AllPosts";

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loader);
  const error = useSelector((state) => state.error);
  const [profile, setProfile] = useState(null);
  console.log(profile);
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
        <Typography
          variant="h3"
          sx={{ textAlign: "center", width: "100%", margin: "2rem" }}
        >
          {profile.username}
        </Typography>
      )}

      {profile && <AllPosts userId={profile._id} />}
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
