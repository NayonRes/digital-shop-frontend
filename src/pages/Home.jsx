import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import MyDrawer from "./MyDrawer";
import Desktop from "../assets/images/Desktop.jpg";
import Laptop from "../assets/images/Laptop.jpg";
import Samsung from "../assets/images/Samsung.jpg";
import Ipad from "../assets/images/Ipad.jpg";
import Iphone from "../assets/images/Iphone.png";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { CartContext } from "../context/CartContext";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.down("sm")]: {
      // padding: "0px 20px",
    },
  },
  topSection: {
    background:
      "radial-gradient(circle, rgba(228,199,105,1) 0%, rgba(230,183,91,1) 99%)",
    //  backgroundImage: `url(images/model1.png), radial-gradient(circle, rgba(228,199,105,1) 0%, rgba(230,183,91,1) 99%)`,
    // backgroundRepeat: " no-repeat",
    // backgroundPosition: "bottom",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "650px",
    [theme.breakpoints.down("xl")]: {
      height: "100vh",
    },
    [theme.breakpoints.down("lg")]: {
      height: "650px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  },
  title1: {
    fontSize: "60px !important",
    color: "white",
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "45px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
      marginBottom: "15px",
    },
  },
  title2: {
    fontSize: "60px !important",
    color: "#154360",
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "45px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
    },
  },
  topMenuStyle: {
    width: "960px",
    margin: "0 auto",
    backgroundColor: "#2b2a29",
    clipPath: "polygon(0 0, 100% 0, 96% 100%, 3% 100%)",
    height: "auto",
    padding: "20px 0px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  middleStyle: {
    height: "auto",
    padding: "20px 0px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  middleStyleForMobile: {
    display: "none",
    padding: "0px 15px 0px 5px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  searchBox: {
    width: "450px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },

  topMenuItem: {
    fontSize: "15px",
    fontFamily: "Inter",
    color: "white",
    "&:hover": {
      color: "#ff793f",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  appbarMenuItem: {
    color: "white",
    fontSize: "15px",
    fontFamily: "Inter",
    "&:hover": {
      color: "#ff793f",
      cursor: "pointer",
    },
  },
  catMenu: {
    fontFamily: "Poppins !important",
  },
  card: {
    textAlign: "center",
    width: "95%",
    margin: "auto",
    background: "#fff",
    padding: "20px 10px",
    borderRadius: "10px",
    boxSizing: "border-box",
    transition: ".5s",
    "&:hover": {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      // width: "70%",
    },
  },
  cardButton: {
    textTransform: "none !important",
    borderRadius: "25px !important",
    padding: "5px 20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
      padding: "2px 20px !important",
    },
  },
  cardTitle: {
    marginBottom: "20px",
    color: "#154360",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      marginBottom: "10px",
    },
  },
  cardImage: {
    width: "150px",
    height: "150px",
    display: "block",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      height: "120px",
    },
  },
  brStyle: {
    // display:'none'
  },
}));

const Home = () => {
  const classes = useStyles();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const { addList, list } = useContext(CartContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuCatrgory = [
    { title: "MEN'S CLOTHING", image: "/images/men.png" },
    { title: "WOMEN'S CLOTHING", image: "/images/women.png" },
    { title: "KID'S CLOTHING", image: "/images/kid.png" },
    { title: "Sports CLOTHING", image: "/images/sports.png" },
    { title: "MEN'S CLOTHING", image: "/images/men.png" },
    { title: "WOMEN'S CLOTHING", image: "/images/women.png" },
    { title: "KID'S CLOTHING", image: "/images/kid.png" },
    { title: "Sports CLOTHING", image: "/images/sports.png" },
    { title: "MEN'S CLOTHING", image: "/images/men.png" },
    { title: "WOMEN'S CLOTHING", image: "/images/women.png" },
    { title: "KID'S CLOTHING", image: "/images/kid.png" },
    { title: "Sports CLOTHING", image: "/images/sports.png" },
    { title: "MEN'S CLOTHING", image: "/images/men.png" },
    { title: "WOMEN'S CLOTHING", image: "/images/women.png" },
    { title: "KID'S CLOTHING", image: "/images/kid.png" },
    { title: "Sports CLOTHING", image: "/images/sports.png" },
  ];
  return (
    <div className={classes.main}>
      <section className={classes.topSection}>
        <div className={classes.topMenuStyle}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item className={classes.topMenuItem}>
              Best Sellers
            </Grid>
            <Grid item className={classes.topMenuItem}>
              Gift Ideas
            </Grid>
            <Grid item className={classes.topMenuItem}>
              New Releases
            </Grid>
            <Grid item className={classes.topMenuItem}>
              Today's Deals
            </Grid>
            <Grid item className={classes.topMenuItem}>
              Customer Service
            </Grid>
          </Grid>
        </div>

        <div className={classes.middleStyle}>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            style={{
              color: "white",
              fontWeight: 600,
              textAlign: "center",
              fontFamily: "Updock",
            }}
          >
            Xaama
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 1, sm: 1, md: 1, lg: 3 }}
          >
            <Grid item>
              <MyDrawer />
            </Grid>

            <Grid item>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                variant="contained"
                style={{
                  background: "#2b2a29",
                  fontFamily: "Inter",
                  fontSize: "15px",
                }}
                endIcon={<KeyboardArrowDownIcon />}
                disableElevation
              >
                Category
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose} className={classes.catMenu}>
                  MEN'S CLOTHING
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.catMenu}>
                  WOMEN'S CLOTHING
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.catMenu}>
                  KID'S CLOTHING
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.catMenu}>
                  Sports
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item className={classes.searchBox}>
              <FormControl fullWidth variant="outlined" size="small">
                <OutlinedInput
                  id="outlined-adornment-password"
                  style={{ background: "white" }}
                  // type={values.showPassword ? "text" : "password"}
                  // value={values.password}
                  // onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        style={{
                          background: "#F5B041",
                          borderRadius: "3px",
                          position: "relative",
                          left: "2px",
                        }}
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item onClick={() => history.push("/cart")}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                className={classes.appbarMenuItem}
              >
                <Grid item>
                  <Badge badgeContent={list.length} color="primary">
                    <ShoppingCartIcon style={{ fontSize: "35px" }} />
                  </Badge>
                </Grid>
                <Grid item style={{ paddingTop: "5px", fontSize: "24px" }}>
                  CART
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={1}
                alignItems="center"
                className={classes.appbarMenuItem}
              >
                <Grid item>
                  <PersonIcon style={{ fontSize: "40px" }} />
                </Grid>
                <Grid item style={{ paddingTop: "5px", fontSize: "24px" }}>
                  PROFILE
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div item className={classes.middleStyleForMobile}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={{ xs: 1, sm: 1, md: 1, lg: 3 }}
          >
            <Grid item xs={9}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <MyDrawer />
                <Typography
                  variant="h4"
                  style={{
                    color: "white",
                    fontWeight: 600,
                    textAlign: "center",
                    fontFamily: "Updock",
                  }}
                >
                  Xaama
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3} onClick={() => history.push("/cart")}>
              <Grid
                item
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Badge badgeContent={list.length} color="primary">
                    <ShoppingCartIcon
                      style={{ color: "#fff", fontSize: "30px" }}
                    />
                  </Badge>
                </Grid>
                <Grid item>
                  <PersonIcon style={{ color: "#fff", fontSize: "35px" }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div style={{ marginTop: "5px", padding: "0px 5px 0px 15px" }}>
            <FormControl fullWidth variant="outlined" size="small">
              <OutlinedInput
                id="outlined-adornment-password"
                style={{ background: "white", borderRadius: "25px" }}
                // type={values.showPassword ? "text" : "password"}
                // value={values.password}
                // onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      style={{
                        background: "#F5B041",
                        borderRadius: "3px",
                        position: "relative",
                        left: "2px",
                        borderRadius: "25px",
                      }}
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Typography component="div" className={classes.title1} gutterBottom>
            GET START
            <br /> YOUR FAVORITE SHOPING
          </Typography>
          <Button
            variant="contained"
            disableElevation
            style={{
              background: "#2b2a29",
              fontFamily: "Inter",
              fontSize: "16px",
              padding: "8px 40px",
            }}
            component={Link}
            to="/products"
          >
            Start Shoping
          </Button>
        </div>
        <div></div>
        {/* <div></div>
        <div></div> */}
      </section>
      <section>
        <Typography
          component="div"
          gutterBottom
          style={{
            fontWeight: 600,
            textAlign: "center",
            marginTop: "50px",
          }}
          className={classes.title2}
        >
          CHOOSE YOUR FAVORITE <br className={classes.brStyle} /> THINGS
        </Typography>
        <Container maxWidth="lg">
          <br />
          <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
            {menuCatrgory.map((item, i) => (
              <Grid item xs={6} sm={4} md={3} key={i}>
                <div className={classes.card}>
                  <img src={item.image} alt="" className={classes.cardImage} />
                  <h4 className={classes.cardTitle}>{item.title}</h4>
                  {/* <p className={classes.productDetail}>{item.des}</p>

                  <p className={classes.priceStyle}>Tk {item.price}</p> */}

                  <Button
                    variant="contained"
                    // variant="outlined"
                    disableElevation
                    className={classes.cardButton}
                    // onClick={() => addNew(item)}
                    component={Link}
                    to="/products"
                  >
                    Visit Here
                  </Button>
                </div>
              </Grid>
            ))}
          </Grid>
          <br />
          <br />
        </Container>
      </section>
    </div>
  );
};

export default Home;
