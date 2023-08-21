import { Link } from "react-router-dom";
import logo from "../assets/cw.png";
import { Avatar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBars = () => {
  const navigate = useNavigate();

  return (
    <Toolbar
      component="abbr"
      sx={{
        backgroundColor: "#A5D6A7",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width="30px"
          onClick={() => navigate("/dasboard")}
        />
      </Link>

      <Button sx={{ color: "black" }} onClick={() => navigate("/")}>
        DASHBOARD
      </Button>
      <Button sx={{ color: "black" }} onClick={() => navigate("/newblog")}>
        NEW BLOG
      </Button>
      <Button sx={{ color: "black" }} onClick={() => navigate("/about")}>
        ABOUT
      </Button>

      <Avatar sx={{ width: 40, height: 40, ml: 150 }}></Avatar>
    </Toolbar>
  );
};

export default NavBars;
