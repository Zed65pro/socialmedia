import { ErrorMessage } from "@hookform/error-message";
import { Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { Controller } from "react-hook-form";

const DatePickerAtom = ({ control, errors }) => {
  return (
    <Controller
      control={control}
      name="dateOfBirth"
      render={({ field, fieldState }) => (
        <>
          <DatePicker
            {...field}
            inputFormat="yyyy-MM-dd"
            label="Date of Birth"
            sx={{ width: "100%" }}
            error={!!fieldState.error}
          />
          <ErrorMessage
            errors={errors}
            name="dateOfBirth"
            render={({ message }) => (
              <Typography sx={{ color: "red" }}>{message}</Typography>
            )}
          />
        </>
      )}
    />
  );
};

export default DatePickerAtom;
