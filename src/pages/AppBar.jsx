import React, { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import { CartContext } from "../context/CartContext";
import { useHistory } from "react-router-dom";
import MyDrawer from "./MyDrawer";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const useStyles = makeStyles((theme) => ({
  searchButtonStyle: {
    background: "#F5B041 !important",
    borderRadius: "3px",
    position: "relative",
    left: "2px",
    width: "90px",
    borderRadius: "25px !important",
    [theme.breakpoints.down("lg")]: {
      width: "60px",
    },
  },
  drawerButtonShow: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  let history = useHistory();
  const { addList, list } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

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
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          onClick={() => history.push("/cart")}
        >
          <Badge badgeContent={list.length} color="primary">
            <ShoppingCartIcon color="info" />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="primary">
            <NotificationsIcon color="info" />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle color="info" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} style={{ maxWidth: "1920px", margin: "auto" }}>
      <AppBar
        position="static"
        style={{
          background: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
            style={{ paddingRight: "2px" }}
          >
            <FlashOnIcon color="primary" />
          </IconButton> */}
          <div className={classes.drawerButtonShow}>
            <MyDrawer />{" "}
          </div>
          <Typography
            variant="h4"
            noWrap
            component="div"
            // sx={{ display: { xs: "none", sm: "block" } }}
            style={{
              cursor: "pointer",
              color: "#154360",
              fontFamily: "Updock",
            }}
            onClick={() => history.push("/")}
          >
            Xaama
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <FormControl
              // sx={{ m: 1, width: "650px" }}
              fullWidth
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                id="outlined-adornment-password"
                style={{ background: "white", borderRadius: "25px" }}
                placeholder="Search here..."
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      className={classes.searchButtonStyle}
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <SearchIcon size="large" style={{ color: "#fff" }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <LightTooltip title="Your Cart" placement="top">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={() => history.push("/cart")}
              >
                <Badge badgeContent={list.length} color="primary">
                  <ShoppingCartIcon color="info" />
                </Badge>
              </IconButton>
            </LightTooltip>
            <LightTooltip title="Notifications" placement="top">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="primary">
                  <NotificationsIcon color="info" />
                </Badge>
              </IconButton>
            </LightTooltip>
            {/* <LightTooltip title="User Profile" placement="top"> */}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle color="info" />
              </IconButton>
            {/* </LightTooltip> */}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {/* <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton> */}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => history.push("/cart")}
            >
              <Badge badgeContent={list.length} color="primary">
                <ShoppingCartIcon color="info" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="primary">
                <NotificationsIcon color="info" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle color="info" />
            </IconButton>
          </Box>
        </Toolbar>
        <Box
          style={{ paddingLeft: "16px", paddingRight: "16px" }}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <FormControl
            // sx={{ m: 1, width: "650px" }}
            fullWidth
            variant="outlined"
            size="small"
          >
            <OutlinedInput
              id="outlined-adornment-password"
              style={{ background: "white", borderRadius: "25px" }}
              placeholder="Search here..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    className={classes.searchButtonStyle}
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <SearchIcon size="large" style={{ color: "#fff" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <br />
        </Box>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
