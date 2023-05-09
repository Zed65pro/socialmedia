import * as yup from "yup";

export const postSchema = yup.object().shape({
  body: yup
    .string("body must be a string")
    .required("This field can't be empty")
    .min(1, "Must be at least 1 character."),
  hashtags: yup
    .array()
    .of(
      yup
        .string("Hashtag must be a string")
        .min(1, "Must be at least 1 character.")
        .max(15, "Must be a maximum of 15 characters")
    )
    .required("This field can't be empty"),
});
