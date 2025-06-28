import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import QuizIcon from "@mui/icons-material/Quiz";

const activeStyle = {
  color: "#ffeb3b",
  fontWeight: "bold",
};

const inactiveStyle = {
  color: "white",
  fontWeight: "normal",
};

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#1565c0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}
        >
          <QuizIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            QuizMaster
          </Typography>
        </NavLink>

        <div>
          <Button
            component={NavLink}
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            About
          </Button>
          <Button
            component={NavLink}
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
