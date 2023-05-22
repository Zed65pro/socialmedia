import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { getToken } from "../../storage/authStorage";
import { constants } from "../../constants";
import { signinSchema } from "../../Schemas/userSchema";
import { signin } from "../../storage/authReducers";
import Form from "../molecules/Form/Form";
import FormInputText from "../atoms/Input/FormInputFIeld";
import LoadingCircle from "../atoms/LoadingCircle";
const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    console.log(getToken());
    getToken() && navigate(`${constants.BASE_URL}/${constants.HOME}`);
  }, [navigate]);

  // reset included
  const { handleSubmit, control } = useForm({
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

    dispatch(signin(email, password, navigate));
  };

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
      {error && error !== "" && (
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
