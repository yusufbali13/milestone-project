import { Link } from "react-router-dom";
import logo from "../assets/cw.png";
import { AppBar, Avatar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navStyle } from "../styles/globalStyles";

const NavBars = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar sx={navStyle}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width="30px"
            onClick={() => navigate("/dasboard")}
          />
        </Link>

        <div>
          <Button onClick={() => navigate("/")}>DASHBOARD</Button>
          <Button onClick={() => navigate("/login")}>NEW BLOG</Button>
          <Button onClick={() => navigate("/about")}>ABOUT</Button>
        </div>

        <Avatar sx={{ width: 40, height: 40, ml: 150 }}></Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default NavBars;
