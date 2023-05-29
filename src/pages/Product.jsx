import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { CartContext } from "../context/CartContext";
import StarIcon from "@mui/icons-material/Star";
import { useSnackbar } from "notistack";
import mydata from "./Data";
import { useHistory } from "react-router-dom";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    width: "95%",
    margin: "auto",
    background: "#fff",
    padding: "20px 10px",
    borderRadius: "10px",
    boxSizing: "border-box",
    transition: ".5s",
    cursor: "pointer",
    "&:hover": {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  cardImg: {
    height: "200px",
    width: "200px",
    [theme.breakpoints.down("lg")]: {
      height: "150px",
      width: "150px",
    },
  },

  cardTitle: {
    marginBottom: "5px",
    color: "#154360",
  },
  priceStyle: {
    fontSize: "16px",
    color: "#154360",
    fontWeight: "500 !important",
    marginTop: 8,
    marginBottom: 14,
  },
  productDetail: {
    fontSize: "13px",
    color: "#839192",
    marginTop: 0,
  },
  cardButton: {
    textTransform: "none !important",
    // borderRadius: "25px !important",
    padding: "5px 20px",
    // fontSize: "16px",
    // margin: "auto",
    // display: "block",
    // textAlign: "center",
  },
  cardButton2: {
    textTransform: "none !important",
    borderRadius: "25px !important",
    padding: "5px 20px !important",
    border: "1px solid #154360 !important",
    color: "#154360 !important",
    "&:hover": {
      background: "#154360  !important",
      color: "#fff !important",
    },
  },
}));

const Product = () => {
  const classes = useStyles();
  const history = useHistory();
  const { addList, list } = useContext(CartContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleSnakbarOpen = (msg, vrnt) => {
    let duration;
    if (vrnt === "error") {
      duration = 2000;
    } else {
      duration = 1000;
    }
    enqueueSnackbar(msg, {
      variant: vrnt,
      autoHideDuration: duration,
    });
  };
  const addNew = (item) => {
    let checkList = list.filter((res) => res.id === item.id);
    if (checkList.length < 1) {
      addList(item);
      handleSnakbarOpen("Successfully Added to Cart", "success");
    } else {
      handleSnakbarOpen("You Already Added The Item", "warning");
    }
  };

  return (
    <div>
      <Grid container rowSpacing={2} columnSpacing={0}>
        {mydata.map((item, i) => (
          <Grid item xs={12} sm={4} md={3} lg={3} xl={2.4} key={i}>
            <div
              className={classes.card}
              // onClick={() => history.push(`/product/${item.id}`)}
            >
              <img
                src={item.img[0]}
                alt=""
                style={{ display: "block", margin: "auto" }}
                className={classes.cardImg}
              />
              <h4 className={classes.cardTitle}>{item.title}</h4>
              <p className={classes.productDetail}>{item.des}</p>
              <Grid container justifyContent="center" alignItems="center">
                <StarIcon fontSize="12px" color="primary" />
                {/* &nbsp;&nbsp; */}
                <StarIcon fontSize="12px" color="primary" />
                {/* &nbsp;&nbsp; */}
                <StarIcon fontSize="12px" color="primary" />
                {/* &nbsp;&nbsp; */}
                <StarIcon fontSize="12px" color="primary" />
                {/* &nbsp;&nbsp; */}
                <StarIcon fontSize="12px" color="primary" />
              </Grid>
              <p className={classes.priceStyle}>Price: Tk {item.price}</p>
              <Button
                variant="contained"
                // variant="outlined"
                disableElevation
                className={classes.cardButton}
                // onClick={() => addNew(item)}
                onClick={() => history.push(`/product/${item.id}`)}
              >
                View Details
              </Button>
              &nbsp;
              <Button
                variant="contained"
                disableElevation
                onClick={() => addNew(item)}
                // startIcon={<ShoppingCartIcon />}
                // color="info"
              >
                <ShoppingCartIcon />
              </Button>
              {/* <Button
                // className={classes.cardButton2}
                onClick={() => addNew(item)}
                // startIcon={<ShoppingCartIcon />}
                color="info"
              >
                Add to Cart
              </Button> */}
            </div>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
    </div>
  );
};

export default Product;
