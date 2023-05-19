import React from "react";
import { Send as SendIcon } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const TextInput = ({ sendMessage, message, setMessage }) => {
  const classes = useStyles();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setMessage("");
      sendMessage();
    }
  };

  return (
    <>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="Chat here..."
          value={message}
          className={classes.wrapText}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            setMessage("");
            sendMessage();
          }}
        >
          <SendIcon />
        </Button>
      </form>
    </>
  );
};

export default TextInput;

const useStyles = makeStyles(() => ({
  wrapForm: {
    display: "flex",
    justifyContent: "center",
    width: "95%",
    margin: `0.5rem auto`,
  },
  wrapText: {
    width: "100%",
  },
  button: {
    //margin: theme.spacing(1),
  },
}));
