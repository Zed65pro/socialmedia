import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchUser } from "../../utils/fetchUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { friendSchema } from "../../Schemas/friendSchema";
import FormInputText from "../atoms/Input/FormInputFIeld";
import api from "../../api/api";
import Navbar from "../organisms/Navbar/NavBar";
import Footer from "../organisms/Footer/Footer";
import FriendList from "../organisms/FriendList";

const Friends = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const [error, setError] = useState("");
  useEffect(() => {
    !user && fetchUser(navigate);
  }, []);

  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(friendSchema),
  });
  const onSubmit = async (data, event) => {
    event.preventDefault();

    const email = event.target.email.value;

    try {
      const newUser = await api.post(`/users/${user._id}/friends`, {
        friendEmail: email,
      });
      fetchUser(navigate);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  if (!user) return <div>User not fetched yet amk.</div>;

  return (
    <div>
      <Navbar />
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Paper elevation={4}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "5rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Add a friend</Typography>
              <FormInputText
                control={control}
                name="email"
                label="Enter a friend's email address"
                autoComplete="email"
                autoFocus
                sx={{ mb: "1rem", mt: "1rem" }}
              />
              <Button type="submit" fullWidth variant="contained">
                Add friend
              </Button>
            </Box>
          </Paper>
          {error && (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" color="secondary">
                {error}
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
      <FriendList />
      <Footer />
    </div>
  );
};

export default Friends;
