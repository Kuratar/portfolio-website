import React from "react";
import {NavLink} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import './Navbar.css';

const styles = {
  navbar: {
    backgroundColor: "#242c38",
    color: "white",
    textTransform: "none",
    textAlign: "left",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "left",
    justifyItems: "center",
  },
};

export default function Navbar() {
  return (
    <Box sx={{position: "sticky"}}>
      <AppBar >
        <Toolbar sx={styles.navbar}>
          <strong style={{ marginRight: 50 }}>Eric Nguyen</strong>
          <NavLink to="/" exact className="nav-link" activeClassName="nav-link-active">Home</NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="nav-link-active">About</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
