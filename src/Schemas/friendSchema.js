import * as yup from "yup";

export const friendSchema = yup.object().shape({
  email: yup
    .string("Email must be a string")
    .email("Must be a valid email address")
    .required("This field can't be empty"),
});
