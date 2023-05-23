import React from "react";
import Navbar from "../organisms/Navbar/NavBar";
import ProtectedPage from "./ProtectedPage";
import AllPosts from "../organisms/AllPosts";
import Footer from "../organisms/Footer/Footer";
import ProfileUser from "../organisms/ProfileUser";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return (
    <ProtectedPage>
      <Navbar />
      <Box>
        <ProfileUser id={id} />
        <hr />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem 0",
          }}
        >
          <AllPosts userId={id} />
        </Box>
      </Box>
      <Footer />
    </ProtectedPage>
  );
};

export default Profile;
