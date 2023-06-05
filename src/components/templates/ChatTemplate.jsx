import { Fab } from "@mui/material";
import React, { useState } from "react";
import { io } from "socket.io-client";
import ChatWindow from "../molecules/ChatWindow";
import ChatIcon from "@mui/icons-material/Chat";

const socket = io.connect(process.env.REACT_APP_API);

const ChatTemplate = () => {
  const [showChatWindow, setShowChatWindow] = useState(false);

  const handleChatIconClick = () => {
    setShowChatWindow(!showChatWindow);
  };
  return (
    <>
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
    </>
  );
};

export default ChatTemplate;
