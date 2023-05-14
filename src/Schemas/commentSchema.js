import * as yup from "yup";

export const commentSchema = yup.object().shape({
  comment: yup
    .string("Comment must be a string")
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be a maximum of 50 characters"),
});
