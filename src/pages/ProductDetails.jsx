import React, { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { CartContext } from "../context/CartContext";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import StarIcon from "@mui/icons-material/Star";
import { useSnackbar } from "notistack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import mydata from "./Data";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Desktop from "../assets/images/Desktop.jpg";
import ReactImageZoom from "react-image-zoom";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "85%",
    margin: "auto",
    background: "#fff",
    padding: "20px 10px",
    borderRadius: "10px",
    boxSizing: "border-box",
    // boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",

    [theme.breakpoints.down("sm")]: {
      width: "70%",
      width: "100%",
    },
  },
  title: {
    fontSize: "24px !important",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "24px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
      marginBottom: "15px",
    },
  },
  oldPriceStyle: {
    fontSize: "16px",
    color: "#919599",
    textDecoration: "line-through",
  },
  priceStyle: {
    fontSize: "24px",
    color: "#F5B041",
  },
  cardButton: {
    textTransform: "none !important",
    // borderRadius: "25px !important",
    padding: "5px 60px !important",
    // fontSize: "16px",
    // margin: "auto",
    // display: "block",
    // textAlign: "center",
  },
  thumbleImageStyle: {
    width: "60px",
    height: "60px",
    margin: "0px 5px",
    borderRadius: "5px",
    [theme.breakpoints.down("lg")]: {
      width: "45px",
      height: "45px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.down("lg")]: {
      width: "30px",
      height: "30px",
    },
  },
  imageStyle: {
    width: "100%",
    height: "500px",
    borderRadius: "5px",
    [theme.breakpoints.down("xl")]: {
      height: "300px",
    },
    [theme.breakpoints.down("md")]: {
      height: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
  },
  mainImgDiv: {
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
  },
  gridStyle: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "20px !important",
    },
  },
}));
const ProductDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { addList, list } = useContext(CartContext);
  const [product, setProduct] = useState({});
  console.log("id", id);
  const [value, setValue] = React.useState("S");
  const [mainImg, setMainImg] = useState("");

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
  useEffect(() => {
    const data = mydata;
    console.log("data", data);
    let pro = data.filter((res) => res.id == id);
    console.log("pro", pro?.[0].img[0]);
    setProduct(pro?.[0]);
    setMainImg(pro?.[0].img[0]);
  }, []);

  return (
    <div>
      <div className={classes.card}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} className={classes.gridStyle}>
            <div className={classes.mainImgDiv}>
              <img src={mainImg} alt="" className={classes.imageStyle} />
            </div>
            {/* {mainImg !== "" && (
              <div style={{ width: "600px", margin: "auto" }}>
                <ReactImageZoom
                  width={600}
                  height={500}
                  zoomWidth={500}
                  img={mainImg}
                  offset={{ vertical: 0, horizontal: 20 }}
                  zoomStyle={"opacity: 1;background-color: gray;z-index: 1000"}
                  // zoomLensStyle={"opacity: 0.4;background-color: gray; width:50px"}
                />
              </div>
            )} */}
            <br />
            <Grid container alignItems="center" justifyContent="center">
              {product?.img?.map((item, i) => (
                <img
                  key={i}
                  src={item}
                  className={classes.thumbleImageStyle}
                  style={{
                    border: item === mainImg ? "1px solid #F5B041" : null,
                  }}
                  onClick={() => setMainImg(item)}
                />
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            //  style={{ display: "none" }}
          >
            <Typography component="div" className={classes.title} gutterBottom>
              {product?.title}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              gutterBottom
              style={{ color: "#919599" }}
            >
              SKU: AAA00007
            </Typography>
            <Typography
              component="div"
              variant="body2"
              gutterBottom
              style={{ color: "#919599" }}
            >
              Seller: <span style={{ color: "#154360" }}>Xaama</span>
            </Typography>
            <br />
            <div>
              <label className={classes.priceStyle}>Price : </label>
              <label className={classes.priceStyle}>{product?.price} Tk</label>
              <br />
              <br />
              {product?.discount > 1 && (
                <>
                  <Chip
                    size="small"
                    label={`- ${product?.discount} %`}
                    color="info"
                  />{" "}
                  <label className={classes.oldPriceStyle}>
                    {product?.price} TK
                  </label>
                </>
              )}{" "}
            </div>
            <br />
            <Typography component="div" variant="h6" gutterBottom>
              Select a size
            </Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="S" control={<Radio />} label="S" />
                <FormControlLabel value="M" control={<Radio />} label="M" />
                <FormControlLabel value="L" control={<Radio />} label="L" />
                <FormControlLabel value="XL" control={<Radio />} label="XL" />
                <FormControlLabel value="XXL" control={<Radio />} label="XXL" />
              </RadioGroup>
            </FormControl>
            <br />
            <br />
            <div>
              <Button
                variant="contained"
                // variant="outlined"
                disableElevation
                className={classes.cardButton}
                onClick={() => addNew(product)}
              >
                Add To Cart
              </Button>
            </div>
            <br />
            <Typography component="div" variant="h6" gutterBottom>
              Description
            </Typography>
            <div style={{ color: "#919599" }}>
              Men's Exclusive Half Sleeve Dark Navy Polo Shirt
              <br /> Item code: DCPS034 <br /> Suitable For: Men Fabrics: 100%
              Cotton <br />
              Style: Regular Fit <br /> Neck: Polo Neck <br /> Sleeve: Half
              Sleeve <br /> Grams Per Square Metre (GSM): 220 <br /> Color: As
              given picture <br /> Size: M, L, XL, XXL, XXXL.
            </div>
            <br />
            <Typography component="div" variant="h6" gutterBottom>
              Size Chart:
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Size</TableCell>
                    <TableCell>Chest </TableCell>
                    <TableCell>Length</TableCell>
                    <TableCell>Sleeve</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>S</TableCell>
                    <TableCell>39</TableCell>
                    <TableCell> 27.5</TableCell>
                    <TableCell> 8.5</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>M</TableCell>
                    <TableCell>39</TableCell>
                    <TableCell> 27.5</TableCell> <TableCell> 8.5</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>M</TableCell>
                    <TableCell>39</TableCell>
                    <TableCell> 27.5</TableCell> <TableCell> 8.5</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>M</TableCell>
                    <TableCell>39</TableCell>
                    <TableCell> 27.5</TableCell> <TableCell> 8.5</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProductDetails;
