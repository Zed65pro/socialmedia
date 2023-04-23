import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const FormInputText = ({ name, control, label, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={value}
          id={name}
          name={name}
          label={label}
          helperText={error ? error.message : null}
          onChange={onChange}
          error={!!error}
          {...props}
        />
      )}
    />
  );
};

export default FormInputText;
