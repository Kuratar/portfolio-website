import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "darkblue",
  },
  options: {
    color: "white",
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <strong className={classes.options}>Eric Nguyen</strong>
    </div>
  );
}
