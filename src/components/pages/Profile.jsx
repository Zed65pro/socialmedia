import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar/NavBar";
import ProtectedPage from "./ProtectedPage";
import AllPosts from "../organisms/AllPosts";
import Footer from "../organisms/Footer/Footer";
import ProfileUser from "../organisms/ProfileUser";
import { Box } from "@mui/material";
import { fetchUser } from "../../utils/fetchUser";
import { LoadingScreen } from "../atoms/LoadingScreen";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!profile && id) {
      fetchUser(navigate, { id, setProfile });
    }
  }, [id, profile, navigate]);

  if (!profile) return <LoadingScreen />;

  return (
    <ProtectedPage>
      <Navbar />
      <Box>
        <ProfileUser profile={profile} />
        <hr />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem 0",
          }}
        >
          <AllPosts userId={profile._id} />
        </Box>
      </Box>
      <Footer />
    </ProtectedPage>
  );
};

export default Profile;
