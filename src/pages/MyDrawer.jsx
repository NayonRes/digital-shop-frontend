import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButtonStyle: {
    color: "white",
    fontSize: "60px !important",
    [theme.breakpoints.down("md")]: {
      color: "#154360",
      fontSize: "40px !important",
    },
  },
  listItemStyle: {
    cursor: "pointer",
  },
  active: {
    color: "#ff793f",
  },
}));

export default function MyDrawer() {
  const classes = useStyles();
  let location = useLocation();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [activeItem, setActiveItem] = useState("");
  const [dense, setDense] = React.useState(true);

  const [mensMenu, setMensMenu] = useState([
    { title: "Men's Short Sleeve", total: 3 },
    { title: "Men's Full Sleeve", total: 3 },
    { title: "Men's Plain T-Shirt", total: 3 },
    { title: "Men's Polo T-Shirt", total: 3 },
    { title: "Men's Sweatshirt", total: 3 },
    { title: "Men's Hoodie", total: 3 },
    { title: "Men's Jacket", total: 3 },
    { title: "Men's Trouser (Comfy)", total: 3 },
    { title: "Men's Trouser (Track)", total: 3 },
    { title: "Men's Shorts", total: 3 },
    { title: "Underwear", total: 3 },
  ]);
  const [womensMenu, setWomensMenu] = useState([
    { title: "Women's T-Shirt", total: 3 },
    { title: "Women's Trouser", total: 3 },
  ]);
  const [kidsMenu, setkidsMenu] = useState([
    { title: "Kid's Short Sleeve", total: 3 },
    { title: "Kid's Full Sleeve", total: 3 },
    { title: "Kid's Plain T-Shirt", total: 3 },
    { title: "Kid's Polo T-Shirt", total: 3 },
    { title: "Kid's Sweatshirt", total: 3 },
    { title: "Kid's Hoodie", total: 3 },
    { title: "Kid's Jacket", total: 3 },
  ]);
  const [sportsMenu, setsportsMenu] = useState([
    { title: "Football Jersey", total: 10 },
    { title: "Cricket Jersey", total: 15 },
    { title: "volleyball Jersey", total: 3 },
  ]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ padding: "16px 0px 0px 8px" }}>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          style={{
            position: "relative",
            color: "#154360",
            fontWeight: 600,
            fontFamily: "Updock",
            margin: 0,
          }}
        >
          Xaama
          <IconButton
            onClick={toggleDrawer(anchor, false)}
            style={{ position: "absolute", right: 9, top: 2 }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Typography>
      </div>

      <Sidebar />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon
              className={classes.menuButtonStyle}
              style={{ color: location.pathname === "/" ? "#fff" : "none" }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
