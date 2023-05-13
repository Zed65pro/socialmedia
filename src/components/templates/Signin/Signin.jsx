import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormInputText from "../../atoms/Input/FormInputFIeld";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from "../../../Schemas/userSchema";
import Form from "../../molecules/Form/Form";
import { constants } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../../storage/authReducers";
import { getToken } from "../../../storage/authStorage.js";
import LoadingCircle from "../../atoms/LoadingCircle";
import { Typography } from "@mui/material";
import { LoadingScreen } from "../../atoms/LoadingScreen";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const user = useSelector((state) => state.user);

  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    getToken() && user && navigate(`${constants.BASE_URL}/${constants.HOME}`);
  }, []);

  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(signinSchema),
  });
  const onSubmit = async (data, event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    dispatch(signin(email, password, navigate, setApiError));
  };

  if (apiError)
    return <LoadingScreen label="Failed to connect to database motherfucker" />;

  return (
    <Form
      type="Sign in"
      linkText="Don't have an account? Sign up"
      link={`${constants.BASE_URL}/${constants.SIGN_UP}`}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    >
      {loading && <LoadingCircle />}
      <FormInputText
        control={control}
        name="email"
        label="Email"
        autoComplete="email"
        autoFocus
      />
      <FormInputText
        control={control}
        name="password"
        label="Password"
        type="password"
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
    </Form>
  );
};

export default Signin;
