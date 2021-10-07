import React from "react";
import { makeStyles } from "@mui/styles";
import Courses from "./Courses";

const courses = [
  {
    id: "CS 122B",
    name: "Project in Databases and Web Applications",
  },
  {
    id: "CS 171",
    name: "Introduction to Artificial Intelligence",
  },
  {
    id: "CS 178",
    name: "Machine Learning and Data-Mining",
  },
  {
    id: "CS 122A",
    name: "Introduction to Data Management",
  },
  {
    id: "ICS 45J",
    name: "Programming in Java",
  },
  {
    id: "ICS 46",
    name: "Data Structure Implementation and Analysis",
  },
  {
    id: "IN4MATX 43",
    name: "Introduction to Software Engineering",
  },
  {
    id: "ICS 45C",
    name: "Programming in C/C++",
  },
  {
    id: "ICS 33",
    name: "Intermediate Programming (Python)",
  },
];

const useStyles = makeStyles({
  page: {
    backgroundColor: "#242c38",
    color: "white",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    height: "100vh",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <h1>Current Student at UCI</h1>
      <h2>Relevant Coursework</h2>
      <Courses />
    </div>
  );
}
