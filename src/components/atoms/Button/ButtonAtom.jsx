import React from "react";
import Button from "@mui/material/Button";

const ButtonAtom = ({ onClick, children, ...rest }) => {
  return (
    <Button variant="contained" onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonAtom;
