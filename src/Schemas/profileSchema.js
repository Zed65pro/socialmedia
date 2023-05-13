import * as yup from "yup";
import dayjs from "dayjs";

const today = dayjs().startOf("day"); // Get today's date

const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

export const profileSchema = yup.object().shape({
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
  dateOfBirth: yup
    .mixed()
    .nullable(true) // Allow null values for dateOfBirth field
    .test(
      "valid-date",
      "Date of birth must be a valid date",
      (value) => value === null || dayjs(value).isValid()
    )
    .test(
      "max-date",
      "Date of birth cannot be after today's date",
      (value) =>
        value === null ||
        dayjs(value).isBefore(today) ||
        dayjs(value).isSame(today)
    ),
});
