import React from "react";
import { useForm } from "react-hook-form";
import FormInputText from "../../atoms/Input/FormInputFIeld";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../../Schemas/userSchema.js";
import Form from "../../molecules/Form/Form";
import { constants } from "../../../constants";

const Signup = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: { email: "", password: "", confirmPassword: "" },
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Form
      type="Sign up"
      linkText="Already have an account? Sign in"
      link={`${constants.BASE_URL}/${constants.SIGN_IN}`}
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
      <FormInputText
        control={control}
        name="confirmPassword"
        label="Confirm password"
        type="password"
        autoFocus
      />
    </Form>
  );
};

export default Signup;
