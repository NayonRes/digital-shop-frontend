import React, { useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Success from "../assets/images/Success.png";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { CartContext } from "../context/CartContext";

const Message = () => {
  const { removeAll } = useContext(CartContext);

  useEffect(() => {
    removeAll();
  }, []);
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "490px",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            background: "#fff",
          }}
        >
          <img
            src={Success}
            alt=""
            width="60px"
            style={{ display: "block", margin: "auto" }}
          />
          <h2 style={{ color: "#2d335b", fontWeight: 400 }}>
            Your donation successfully sent
          </h2>

          <Button
            variant="contained"
            disableElevation
            style={{
              background: "none",
              textTransform: "none",
              fontSize: "16px",
              color: "#154360",
            }}
            component={Link}
            to="/"
            startIcon={<KeyboardBackspaceIcon fontSize="large" />}
          >
            Back To Home Page
          </Button>
        </div>
      </Grid>
    </Container>
  );
};

export default Message;
