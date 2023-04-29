import { Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const DividerAtom = ({ sx, props }) => {
  const classes = useStyles();

  return <Divider className={classes.divider} sx={sx} {...props} />;
};

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: "1rem 0!important",
  },
}));

export default DividerAtom;
