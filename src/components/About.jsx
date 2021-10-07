import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#242c38",
    color: "white",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    height: "100%",
  },
  introduction: {
    margin: "auto",
    width: "50%",
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <h1>About Me</h1>
      <p className={classes.introduction}>
        Hello there! My name is Eric Nguyen Hello there! My name is Eric Nguyen
        Hello there! My name is Eric Nguyen Hello there! My name is Eric Nguyen
        Hello there! My name is Eric Nguyen Hello there! My name is Eric Nguyen
        Hello there! My name is Eric Nguyen Hello there! My name is Eric Nguyen
      </p>
    </div>
  );
}
