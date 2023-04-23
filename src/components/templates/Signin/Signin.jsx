import React from "react";
import { useForm } from "react-hook-form";
import FormInputText from "../../atoms/Input/FormInputFIeld";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from "../../../Schemas/userSchema";
import Form from "../../molecules/Form/Form";

const Signin = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: { email: "", password: "", confirmPassword: "" },
    resolver: yupResolver(signinSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Form
      type="Sign in"
      linkText="Don't have an account? Sign up"
      link="signup"
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    >
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
    </Form>
  );
};

export default Signin;
