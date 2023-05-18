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

const ChatWindow = ({ setShowChatWindow, socket }) => {
  const user = useSelector((state) => state.user);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

  const handleFriendClick = (friend) => {
    socket.emit("join_room", "-12");
    setSelectedFriend(friend);
  };

  const handleCloseChat = () => {
    setSelectedFriend(null);
    setShowChatWindow(false);
  };

  useEffect(() => {
    socket.on("chat message", (message) => {
      //   console.log(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection on component unmount
    //   return () => {
    //     socket.disconnect();
    //   };
  }, [socket]);

  const sendMessage = () => {
    const chatMessage = {
      sender: user.username,
      receiver: selectedFriend.friendName,
      message,
    };
    // Emit 'chat message' event to the server
    socket.emit("chat message", chatMessage);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 9999,
          background: "#fff",
          width: "700px",
          height: "500px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          padding: "1rem",
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
              padding: "0 1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {selectedFriend ? (
              <>
                <Typography variant="h6">
                  Chat with {selectedFriend.friendName}
                </Typography>
                {/* Display chat conversation here */}
                <Box
                  sx={{
                    flex: 1,
                    backgroundColor: "#f9f9f9",
                    borderRadius: "4px",
                    marginTop: "1rem",
                    padding: "1rem",
                    overflow: "auto",
                  }}
                >
                  <div>
                    {/* Render the messages */}
                    {messages.map((message, index) => (
                      <div key={index}>
                        <span>Sender:{message.sender}</span>
                        {/* <span>{message.message}</span> */}
                        <br />
                        <span>{message.message}</span>
                      </div>
                    ))}

                    {/* Input field and send button */}
                    <input
                      type="text"
                      placeholder="Chat here.."
                      onChange={(event) => setMessage(event.target.value)}
                      value={message}
                    />
                    <button onClick={sendMessage}>Send</button>
                  </div>
                </Box>
              </>
            ) : (
              <Typography variant="body1">
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
