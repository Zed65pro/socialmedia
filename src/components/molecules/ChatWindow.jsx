import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { io } from "socket.io-client";
import ChatUi from "../Chat/ChatUi";

const ChatWindow = ({ setShowChatWindow, socket }) => {
  const user = useSelector((state) => state.user);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleFriendClick = (friend) => {
    // Special room key
    const ids = [user._id, friend.friendId].sort();
    const roomKeyById = ids.join("_");

    socket.emit("join_room", roomKeyById);
    setSelectedFriend(friend);
  };

  const handleCloseChat = () => {
    setSelectedFriend(null);
    setShowChatWindow(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: { sm: "0", lg: "1rem" },
          right: { sm: "0", lg: "1rem" },
          zIndex: 9999,
          background: "#fff",
          width: { sm: "100%", lg: "800px" },
          height: { sm: "70%", lg: "600px" },
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          padding: "6px",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
          }}
          onClick={handleCloseChat}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            height: "calc(100% - 48px)",
          }}
        >
          <Box
            sx={{
              width: "40%",
              borderRight: "1px solid #ccc",
              padding: "0 1rem",
              overflow: "auto",
            }}
          >
            <Typography variant="h6">Friends</Typography>
            <List>
              {user.friends.map((friend) => (
                <ListItem
                  key={friend.friendName}
                  button
                  onClick={() => handleFriendClick(friend)}
                  sx={{
                    backgroundColor:
                      selectedFriend?.friendId === friend.friendId
                        ? "#f0f0f0"
                        : "inherit",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={friend.friendName}
                      src={friend.friendProfilePicture}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={friend.friendName} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              flex: 1,
              // padding: "0 1rem",
              display: "flex",
              flexDirection: "column",
              margin: "0 1rem",
            }}
          >
            {selectedFriend ? (
              <>
                <ChatUi selectedFriend={selectedFriend} socket={socket} />
              </>
            ) : (
              <Typography
                variant="body1"
                sx={{ textAlign: "center", marginTop: "40%" }}
              >
                Select a friend to start chatting
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChatWindow;
