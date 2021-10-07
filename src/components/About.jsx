import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#242c38",
    color: "white",
  },
});

export default function About() {
  const classes = useStyles();

  return <div className={classes.page}>about me</div>;
}
