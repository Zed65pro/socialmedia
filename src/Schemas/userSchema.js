import * as yup from "yup";

const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

export const signinSchema = yup.object().shape({
  email: yup
    .string("Email must be a string")
    .email("Must be a valid email address")
    .required("This field can't be empty"),
  password: yup
    .string("Password must be a string")
    .required("This field can't be empty")
    .min(5, "Must be at least 5 characters")
    .max(15, "Must be a maximum of 16 characters"),
});

export const signupSchema = yup.object().shape({
  username: yup
    .string("Username must be a string")
    .matches(
      usernameRegex,
      "Username must be 3-16 characters long and can only contain alphanumeric characters, underscores and hyphens"
    )
    .required("This field can't be empty"),
  email: yup
    .string("Email must be a string")
    .email("Must be a valid email address")
    .required("This field can't be empty"),
  password: yup
    .string("Password must be a string")
    .required("This field can't be empty")
    .min(5, "Must be at least 5 characters")
    .max(15, "Must be a maximum of 16 characters"),
  confirmPassword: yup
    .string("Password must be a string")
    .required("This field can't be empty")
    .oneOf([yup.ref("password"), null], "Passwords don't match"),
});
