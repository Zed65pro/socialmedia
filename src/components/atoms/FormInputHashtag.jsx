import { Box } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

const FormInputText = ({ name, control, label, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
        formState,
      }) => (
        <>
          <TagsInput
            value={value}
            id={name}
            name={name}
            onBlur={onBlur}
            inputRef={ref}
            placeHolder={label}
            onChange={onChange}
            {...props}
          />
          <Box sx={{ textAlign: "center" }}>
            <span>Press enter to add hashtag..</span>
          </Box>
        </>
      )}
    />
  );
};

export default FormInputText;
