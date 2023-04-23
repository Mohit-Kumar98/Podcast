import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
// import Listened from "../ListenedF/Listened";

import './Header.css';

const settings = ["Profile",, "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { watchlist, watched } = useContext(GlobalContext);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // console.log(watchlist ? true : false)
  return (
    <>
      <header>
        <div className="inner-content">
          <div class="brand">
            <Link to="/">Home</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watchlist" activeClassName="active">
                WatchList{" "}
                {watchlist.length > 0 ? (
                  <i class="fa-solid fa-tv" style={{ color: "gold" }}></i>
                ) : (
                  <i class="fa-solid fa-tv"></i>
                )}
              </Link>
            </li>
            <li>
              <Link to="/listened" activeClassName="active">
                Listened{" "}
                {watched.length > 0 ? (
                    <i class="fa-solid fa-headphones" style={{ color: "red" }}></i>
                ) : (
                    <i class="fa-solid fa-headphones"></i>
                )}
              </Link>
            </li>
            <li>
                <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar
                            s={2}
                            alt="Remy Sharp"
                            src="/img.jpg"
                          />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "35px" }}
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
                        {settings.map((setting) => (
                          <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                 
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
