import logo from "../assets/cw.png";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navStyle } from "../styles/globalStyles";

const NavBars = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar sx={navStyle}>
        <Box>
          <Button onClick={() => navigate("/")}>DASHBOARD</Button>
          <Button onClick={() => navigate("/login")}>NEW BLOG</Button>
          <Button onClick={() => navigate("/about")}>ABOUT</Button>
        </Box>

        <img src={logo} alt="logo" width="30px" />

        <Avatar sx={{ width: 40, height: 40 }}>Y</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default NavBars;
