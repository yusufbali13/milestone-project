import { Toolbar } from "@mui/material";
import React from "react";
import { navStyle } from "../styles/globalStyles";

const Footers = () => {
  return (
    <Toolbar sx={navStyle}>
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
