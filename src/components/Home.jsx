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
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/UCI_Donald_Bren_Hall.jpg"
        alt="uci building donald bren school of information and computer sciences"
        style={{ backgroundColor: "white", width: "50%", height: "50%"}}
      ></img>
      <h2>Class of 2022</h2>
      <h2>Computer Science B.S.</h2>
      <h2>Relevant Coursework</h2>
      <Courses />
      <Internship />
    </div>
  );
}
