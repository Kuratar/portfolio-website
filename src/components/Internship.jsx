import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  internship: {
    marginTop: 100,
  },
});

export default function Internship() {
  const classes = useStyles();

  return (
    <div className={classes.internship}>
      <h1>Current Software Intern at Ardent Labs</h1>
      <a href="https://www.ardentlabs.io/" target="_blank">
        <img
          src="https://static.wixstatic.com/media/132a22_c124961f91294369b46aeaebf0b2182b~mv2.png/v1/fill/w_300,h_60,al_c,q_85/ardent-labs-logo.webp"
          alt="ardent labs logo"
        ></img>
      </a>
      <div style={{ marginTop: 25 }}>
        <a href="https://www.ardentacademy.com/" target="_blank">
          <img
            src="https://www.ardentacademy.com/images/Ardent-logo-50high-hor.png"
            alt="ardent academy logo"
            style={{ backgroundColor: "white" }}
          ></img>
        </a>
      </div>
    </div>
  );
}
