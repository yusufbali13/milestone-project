import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { CardMedia, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/cw.png";

function NavBars() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ marginBottom: 4, backgroundColor: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <CssBaseline />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={() => navigate("/")}>Dashboard</MenuItem>
              <MenuItem onClick={() => navigate("/login")}>New Blog</MenuItem>
              <MenuItem onClick={() => navigate("/about")}>About</MenuItem>
            </Menu>
          </Box>

          <CardMedia
            component="img"
            height="65"
            image={logo}
            alt="image"
            sx={{
              objectFit: "contain",
              width: "100px",
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                navigate("/");
                handleCloseNavMenu;
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              DASHBOARD
            </Button>
            <Button
              onClick={() => {
                navigate("/login");
                handleCloseNavMenu;
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              NEW BLOG
            </Button>
            <Button
              onClick={() => {
                navigate("/about");
                handleCloseNavMenu;
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              ABOUT
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="GS"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Galatasaray_Star_Logo.png/313px-Galatasaray_Star_Logo.png"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBars;
