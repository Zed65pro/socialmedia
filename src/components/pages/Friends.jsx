import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { friendSchema } from "../../Schemas/friendSchema";
import FormInputText from "../atoms/Input/FormInputFIeld";
import Navbar from "../organisms/Navbar/NavBar";
import Footer from "../organisms/Footer/Footer";
import FriendList from "../organisms/FriendList";
import { FaUserFriends } from "react-icons/fa";
import { addFriendByEmail } from "../../storage/authReducers";
import ProtectedPage from "./ProtectedPage";

const Friends = () => {
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm({
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

    dispatch(addFriendByEmail(email));
  };

  return (
    <ProtectedPage>
      <Navbar />
      <Grid
        container
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item>
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
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              {" "}
              ADD YOUR FRIEND
            </Typography>
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
        </Grid>
      </Grid>
      <hr style={{ marginTop: "2rem" }} />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <FaUserFriends size="55" style={{ marginRight: "10px" }} />
        <Typography variant="h4">Friends</Typography>
      </Box>
      <FriendList />
      <Footer />
    </ProtectedPage>
  );
};

export default Friends;
