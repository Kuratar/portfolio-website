import React from "react";
import { makeStyles } from "@mui/styles";
import Courses from "./Courses";
import Internship from "./Internship";

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

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <h1>Current Student at UCI</h1>
      <h2>Class of 2022</h2>
      <h2>Computer Science B.S.</h2>
      <h2>Relevant Coursework</h2>
      <Courses />
      <Internship />
    </div>
  );
}
