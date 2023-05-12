import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import FormInputText from "../atoms/Input/FormInputFIeld";
import { yupResolver } from "@hookform/resolvers/yup";
import { constants } from "../../constants";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { profileSchema } from "../../Schemas/profileSchema";
import Footer from "./Footer/Footer";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";
import api from "../../api/api";
import { fetchUser } from "../../utils/fetchUser";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { useSelector } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";

const ProfileEdit = ({ setIsEdit }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user ? user.username : "",
      email: user ? user.email : "",
      dateOfBirth: user ? dayjs(user.dateOfBirth) : null,
    },
    resolver: yupResolver(profileSchema),
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const dateOfBirth = new Date(data.dateOfBirth); // Convert dayjs object to Date object
    const formattedDate = dayjs(dateOfBirth).format("YYYY MM DD");

    try {
      const response = await api.patch("/users/edit", {
        image,
        email,
        username,
        dateOfBirth: formattedDate,
      });
      fetchUser(navigate);
      setIsEdit(false);
      console.log(response.data);
      user = response.data.user;
      navigate(`${constants.BASE_URL}/${constants.USER}/${user._id}`);
    } catch (err) {
      setError(err.response);
    }
  };

  if (!user) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }

  return (
    <>
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
        <ProfilePictureUpload
          image={image}
          setImage={setImage}
          profile={user}
        />
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
              <>
                <DatePicker
                  {...field}
                  inputFormat="yyyy-MM-dd"
                  label="Date of Birth"
                  sx={{ width: "100%" }}
                  error={!!fieldState.error}
                />
                <ErrorMessage
                  errors={errors}
                  name="dateOfBirth"
                  render={({ message }) => (
                    <Typography sx={{ color: "red" }}>{message}</Typography>
                  )}
                />
              </>
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
      <Footer />
    </>
  );
};

export default ProfileEdit;
