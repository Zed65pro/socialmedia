import React, { useState } from "react";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import FormInputText from "../atoms/Input/FormInputFIeld";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { profileSchema } from "../../Schemas/profileSchema";
import Footer from "./Footer/Footer";
import ProfilePictureUpload from "../molecules/ProfilePictureUpload";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../storage/authReducers";
import DatePickerAtom from "../atoms/DatePickerAtom";

const ProfileEdit = ({ setIsEdit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  const {
    handleSubmit,
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
      dispatch(
        updateUser(user._id, image, email, username, formattedDate, navigate)
      );

      setIsEdit(false);
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
          <DatePickerAtom control={control} errors={errors} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
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
