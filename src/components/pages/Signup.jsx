import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { getToken } from "../../storage/authStorage";
import { constants } from "../../constants";
import { signupSchema } from "../../Schemas/userSchema";
import Form from "../molecules/Form/Form";
import { signup } from "../../storage/authReducers";
import FormInputText from "../atoms/Input/FormInputFIeld";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  // const user = useSelector((state) => state.user);
  useEffect(() => {
    getToken() && navigate(`${constants.BASE_URL}/${constants.HOME}`);
  }, [navigate]);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = async (data, event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispatch(signup(username, email, password, navigate));
  };

  return (
    <Form
      type="Sign up"
      linkText="Already have an account? Sign in"
      link={`${constants.BASE_URL}/${constants.SIGN_IN}`}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    >
      {loading && <p>Loading...</p>}
      <FormInputText
        control={control}
        name="username"
        label="Username"
        autoFocus
      />
      <FormInputText control={control} name="email" label="Email" autoFocus />
      <FormInputText
        control={control}
        name="password"
        label="Password"
        type="password"
        autoFocus
      />
      <FormInputText
        control={control}
        name="confirmPassword"
        label="Confirm password"
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

export default Signup;
