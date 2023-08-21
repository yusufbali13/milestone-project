import { Link, Toolbar } from "@mui/material";
import React from "react";

const Footers = () => {
  return (
    <Toolbar
      component="abbr"
      sx={{
        backgroundColor: "#A5D6A7",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h4>Developed by FS Team</h4>

      <span>
        Copyright ©
        <a href="https://clarusway.com/" target="_blank">
          Clarusway.
        </a>
        {new Date().getFullYear()}
      </span>
    </Toolbar>
  );
};

export default Footers;
