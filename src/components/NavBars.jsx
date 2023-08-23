import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { navStyle } from "../styles/globalStyles";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavBars() {
  const navigate = useNavigate();

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={navStyle}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Button onClick={() => navigate("/")}>DASHBOARD</Button>
            <Button onClick={() => navigate("/login")}>NEW BLOG</Button>
            <Button onClick={() => navigate("/about")}>ABOUT</Button>
          </Box>

          <Avatar sx={{ width: 40, height: 40 }}>Y</Avatar>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders"></Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default NavBars;

// import logo from "../assets/cw.png";
// import {
//   AppBar,
//   Avatar,
//   Box,
//   Button,
//   CssBaseline,
//   Toolbar,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { navStyle } from "../styles/globalStyles";

// const NavBars = () => {
//   const navigate = useNavigate();

//   return (
//     <AppBar position="static">
//       <CssBaseline />
//       <Toolbar sx={navStyle}>
//         <Box>
//           <Button onClick={() => navigate("/")}>DASHBOARD</Button>
//           <Button onClick={() => navigate("/login")}>NEW BLOG</Button>
//           <Button onClick={() => navigate("/about")}>ABOUT</Button>
//         </Box>

//         <img src={logo} alt="logo" width="30px" />

//         <Avatar sx={{ width: 40, height: 40 }}>Y</Avatar>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBars;
