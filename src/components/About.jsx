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
});

export default function About() {
  const classes = useStyles();

  return <div className={classes.page}>about me</div>;
}
