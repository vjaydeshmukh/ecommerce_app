import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import "../index.css";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { ShoppingCart, Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DropDownMenu from "./Fragment/DropDownMenu";
import InputBase from "@material-ui/core/InputBase";
import { ProductConsumer } from "../context";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    inputField: {
      padding: "3px",
      borderRradius: "4px",
      width: "20px",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Navbar(props) {
  /*take input value*/
  const [search, setSearch] = useState("");
  const myChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  /*for shopping cart icon */
  const [cart, setCart] = useState(0);
  /*go to Search function */
  // const gotoSearch = (props) => {
  //   // window.location.replace("/search/" + search);
  //   this.props.history.push("/search/" + search);
  // };
  const keyPress = (e) => {
    if (e.keyCode == 13) {
      console.log(search);
      // this.props.history.push("/?search=" + search);
      // alert("g");
      // this.props.history.push("/?search=" + search);
    }
  };
  /*design*/
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/login">Login</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/register">Register</Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "secondary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton>
          <Badge badgeContent={cart}>
            <Link to="/cart">
              <ShoppingCart style={{ color: "black" }} />
            </Link>
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Account</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          setCart(cart.length);
        }}
      </ProductConsumer>

      <AppBar position="static">
        <Toolbar>
          <DropDownMenu />

          <div className="ml-4 p-2">
            <form>
              <input
                id="name1"
                className="name"
                placeholder="   search…......"
                name="search"
                onKeyDown={keyPress}
                onChange={myChangeHandler}
                required
              />
              <Button className="btnSearch">
                <Link to={"/search/" + search}>
                  <SearchIcon style={{ color: "black", border: "none" }} />
                </Link>
              </Button>
            </form>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton>
              <Badge badgeContent={cart} style={{ color: "white" }}>
                <Link to="/cart">
                  <ShoppingCart style={{ color: "black" }} />
                </Link>
              </Badge>
            </IconButton>

            <IconButton
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
