import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { constants } from "../../constants";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      setSearchTerm(search);
    }, 300); // Adjust the delay as needed (in milliseconds)

    return () => {
      clearTimeout(delay);
    };
  }, [search]);

  useEffect(() => {
    const handleSearch = async () => {
      if (!searchTerm) {
        setPosts([]);
        setUsers([]);
        return;
      }

      try {
        const response = await api.get(`/search/${searchTerm}`);
        const { users, posts } = response.data;
        setPosts(posts);
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };

    handleSearch();
  }, [searchTerm]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <TextField
        id="search"
        variant="outlined"
        name="search"
        label="Search .."
        onKeyPress={handleKeyPress}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AiOutlineSearch />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          width: { xs: "90%", sm: "60%", md: "50%", lg: "20%" },
        }}
      >
        {users.length > 0 && (
          <Box>
            <Box
              sx={{
                width: "100%",
                padding: "15px",
                backgroundColor: "grey",
              }}
            >
              <Typography>USERS</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              {users.map((user) => (
                <Button
                  fullWidth
                  variant="filled"
                  color="primary"
                  onClick={() =>
                    navigate(
                      `${constants.BASE_URL}/${constants.USER}/${user._id}`
                    )
                  }
                  key={user._id}
                  sx={{ borderBottom: "solid black 1px", padding: "15px" }}
                >
                  {user.username}
                </Button>
              ))}
            </Box>
          </Box>
        )}
        {posts.length > 0 && (
          <Box>
            <Box
              sx={{
                width: "100%",
                padding: "15px",
                backgroundColor: "grey",
              }}
            >
              <Typography>POSTS</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              {posts.map((post) => (
                <Box sx={{ borderBottom: "solid black 1px", padding: "15px" }}>
                  <Typography key={post._id}>{post.body}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchBar;
