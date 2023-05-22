import React from "react";
import Navbar from "../organisms/Navbar/NavBar";
import AllPosts from "../organisms/AllPosts";
import SearchBar from "../organisms/SearchBar";
import LeftPanel from "../organisms/LeftPanel";
import RightPanel from "../organisms/RightPanel";
import ChatTemplate from "../templates/ChatTemplate";
import ProtectedPage from "./ProtectedPage";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <ProtectedPage>
      <ChatTemplate />
      <Navbar />
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
    </ProtectedPage>
  );
};

export default Home;
