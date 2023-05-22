import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import TextInput from "./TextInput.js";
import { MessageLeft, MessageRight } from "./ChatMessage";
import { Box, Paper, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import api from "../../api/api.js";

const ChatUi = ({ selectedFriend, socket }) => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const containerRef = useRef(null);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get(
          `/messages/${user._id}/${selectedFriend.friendId}`,
          {
            params: {
              page: currentPage,
              limit: 10,
            },
          }
        );
        setMessages((prevMessages) => [
          ...response.data.messages,
          ...prevMessages,
        ]);

        // console.log(response.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Failed to fetch messages:", error.response.data.error);
      }
    };

    fetchMessages();
  }, [user._id, selectedFriend.friendId, currentPage]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container.scrollTop === 0 && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useLayoutEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    const chatMessage = {
      sender: { username: user.username, userId: user._id },
      receiver: {
        username: selectedFriend.friendName,
        userId: selectedFriend.friendId,
      },
      content: message,
      timestamp: new Date(Date.now()),
    };
    try {
      await api.post("/messages", chatMessage);
      // console.log("Message sent:", response.data);
    } catch (error) {
      console.error("Failed to send message:", error.response.data.error);
    }
    // // Emit 'chat message' event to the server
    scrollToBottom();
    socket.emit("chat message", chatMessage);
  };

  useEffect(() => {
    socket.on("chat message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, [socket]);

  return (
    <div className={classes.container}>
      <Box className={classes.paper}>
        <Typography>{`Chat with ${selectedFriend.friendName}`}</Typography>
        <div
          id="style-1"
          ref={containerRef}
          onScroll={handleScroll}
          className={classes.messagesBody}
        >
          <Paper>
            {messages.map((message, index) =>
              message.sender.userId === user._id ? (
                <MessageRight
                  key={message.message + "-" + index}
                  message={message.content}
                  timestamp={message.timestamp}
                />
              ) : (
                <MessageLeft
                  key={message.message + "-" + index}
                  message={message.content}
                  timestamp={message.timestamp}
                />
              )
            )}
            <div ref={messagesEndRef} /> {/* Scroll to this element */}
          </Paper>
        </div>
        <TextInput
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
        />
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      padding: "1rem",
    },
    paper2: {
      padding: "10px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )",
    },
  })
);

export default ChatUi;
