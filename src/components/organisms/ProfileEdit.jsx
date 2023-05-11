import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import FormInputText from "../atoms/Input/FormInputFIeld";
import { yupResolver } from "@hookform/resolvers/yup";
import { constants } from "../../constants";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { profileSchema } from "../../Schemas/profileSchema";
import Navbar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";
import { useSelector } from "react-redux";
import api from "../../api/api";
import { fetchUser } from "../../utils/fetchUser";
import { DatePicker } from "@mui/x-date-pickers-pro";

const ProfileEdit = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const user = useSelector((state) => state.user);

  const [image, setImage] = useState(null);

  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      username: user ? user.username : "",
      email: user ? user.email : "",
      dateOfBirth: user ? dayjs(user.dateOfBirth) : "",
    },
    resolver: yupResolver(profileSchema),
  });

  useEffect(() => {
    !user && navigate(`${constants.BASE_URL}/${constants.HOME}`);
  }, []);

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const dateOfBirth = data.dateOfBirth;

    const formattedDate = dayjs(dateOfBirth).format("YYYY-MM-DD");
    console.log(formattedDate);
    try {
      const response = await api.patch("/users/edit", {
        image,
        email,
        username,
        formattedDate,
      });
      fetchUser(navigate);
      console.log(response.data);
      navigate(`${constants.BASE_URL}/${constants.USER}/${user._id}`);
    } catch (err) {
      setError(err.response.data.error);
    }
  };
  if (!user) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }

  return (
    <>
      <Navbar />
      {user && (
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <Typography variant="h2">Profile</Typography>
          <ProfilePictureUpload image={image} setImage={setImage} />
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <FormInputText
              control={control}
              name="username"
              label="Username"
              autoFocus
            />
            <FormInputText
              control={control}
              name="email"
              label="Email"
              autoFocus
            />
            {error && (
              <Typography
                sx={{ textAlign: "center", color: "red" }}
                position={"center"}
                variant="h5"
              >
                {error}
              </Typography>
            )}
            <Controller
              control={control}
              name="dateOfBirth"
              render={({ field, fieldState }) => (
                <DatePicker
                  {...field}
                  inputFormat="yyyy-MM-dd"
                  label="Date of Birth"
                  sx={{ width: "100%" }}
                  // Any additional props you want to pass to the DatePicker component
                  error={!!fieldState.error} // Set the error prop based on the presence of an error
                  helperText={fieldState.error?.message} // Display the error message, if available
                  onChange={(value) => {
                    const formattedDate = dayjs(value).format("YYYY-MM-DD");
                    field.onChange(formattedDate);
                  }}
                />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default ProfileEdit;