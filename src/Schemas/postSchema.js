import * as yup from "yup";

const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

export const postSchema = yup.object().shape({
  body: yup
    .string("body must be a string")
    .required("This field can't be empty")
    .min(1, "Must be at least 1 character.")
    .max(15, "Must be a maximum of 35 characters."),
  hashtags: yup
    .string("Hashtag must be a string")
    .required("This field can't be empty")
    .min(5, "Must be at least 5 characters")
    .max(15, "Must be a maximum of 16 characters"),
});
