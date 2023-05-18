import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { constants } from "../../constants";
import { getToken } from "../../storage/authStorage";
import Navbar from "../organisms/Navbar/NavBar";
import Footer from "../organisms/Footer/Footer";
import AllPosts from "../organisms/AllPosts";
import SearchBar from "../organisms/SearchBar";
import LeftPanel from "../organisms/LeftPanel";
import RightPanel from "../organisms/RightPanel";
import LoadingCircle from "../atoms/LoadingCircle";
import { LoadingScreen } from "../atoms/LoadingScreen";
import background from "../../assets/background.jpeg";
import { Box, Fab } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { fetchUser } from "../../utils/fetchUser";
import ChatWindow from "../molecules/ChatWindow";
import { io } from "socket.io-client";

// const socket = io.connect("http://localhost:3000");
const socket = io.connect("https://social-media-app-server-o938.onrender.com");

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const [showChatWindow, setShowChatWindow] = useState(false);

  useEffect(() => {
    !getToken() && navigate(`${constants.BASE_URL}/${constants.SIGN_IN}`);
  }, [navigate]);

  useEffect(() => {
    if (!user) {
      fetchUser(navigate);
    }
  }, [user, navigate]);

  if (!user) {
    return <LoadingScreen />;
  }

  const handleChatIconClick = () => {
    setShowChatWindow(!showChatWindow);
  };

  return (
    <>
      <Navbar />
      {loading && <LoadingCircle />}
      <SearchBar />
      <hr style={{ margin: "2rem 0" }} />

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
          overflow: "hidden",
        }}
      >
        <LeftPanel />
        <AllPosts />
        <RightPanel />
      </Box>

      {showChatWindow ? (
        <ChatWindow setShowChatWindow={setShowChatWindow} socket={socket} />
      ) : (
        <Fab
          color="primary"
          size="large"
          onClick={handleChatIconClick}
          sx={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 9999,
          }}
        >
          <ChatIcon />
        </Fab>
      )}

      <Footer />
    </>
  );
};

export default Home;
