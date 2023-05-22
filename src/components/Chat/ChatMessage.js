import { makeStyles } from "@material-ui/styles";
import { deepOrange } from "@mui/material/colors";
import React from "react";

const useStyles = makeStyles(() => ({
  messageRow: {
    display: "flex",
  },
  messageRowRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  messageBlue: {
    position: "relative",
    marginLeft: "20px",
    marginBottom: "10px",
    padding: "1rem",
    backgroundColor: "#A8DDFD",
    width: "200%",
    //height: "50px",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    border: "1px solid #97C6E3",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #A8DDFD",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      left: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #97C6E3",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      left: "-17px",
    },
  },
  messageOrange: {
    position: "relative",
    marginRight: "20px",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#f8e896",
    width: "60%",
    //height: "50px",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    border: "1px solid #dfd087",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #f8e896",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      right: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #dfd087",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      right: "-17px",
    },
  },

  messageContent: {
    padding: "5px",
    margin: 0,
    wordWrap: "break-word",
  },
  messageTimeStampRight: {
    position: "absolute",
    fontSize: ".85em",
    fontWeight: "300",
    marginTop: "10px",
    bottom: "0",
    right: "5px",
  },

  orange: {
    color: "orange",
    backgroundColor: deepOrange[500],
    width: "1rem",
    height: "1rem",
  },
  avatarNothing: {
    color: "transparent",
    backgroundColor: "transparent",
    width: "1rem",
    height: "1rem",
  },
  displayName: {
    marginLeft: "20px",
  },
}));

function formatTimestamp(timestamp) {
  const date = new Date(Date.parse(timestamp));
  const options = {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const formattedDate = date.toLocaleString(undefined, options);
  return formattedDate;
}

export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? formatTimestamp(props.timestamp) : "";
  console.log(
    formatTimestamp(props.timestamp) + "    LAOSLD   " + props.timestamp
  );
  // const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  // const displayName = props.displayName ? props.displayName : "Hamada";
  const classes = useStyles();
  return (
    <>
      <div className={classes.messageRow}>
        {/* <Avatar
          alt={displayName}
          className={classes.orange}
          src={photoURL}
        ></Avatar> */}
        <div>
          {/* <div className={classes.displayName}>{displayName}</div> */}
          <div className={classes.messageBlue}>
            <div>
              <p className={classes.messageContent}>{message}</p>
            </div>
            <div className={classes.messageTimeStampRight}>{timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};
//avatar
export const MessageRight = (props) => {
  const classes = useStyles();
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? formatTimestamp(props.timestamp) : "";
  return (
    <div className={classes.messageRowRight}>
      <div className={classes.messageOrange}>
        <p className={classes.messageContent}>{message}</p>
        <div className={classes.messageTimeStampRight}>{timestamp}</div>
      </div>
    </div>
  );
};
