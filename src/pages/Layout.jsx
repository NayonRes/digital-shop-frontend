import React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "./AppBar";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Layout = () => {
  const theme = useTheme();
  let location = useLocation();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log("matches", matches);
  if (
    location.pathname === "/" ||
    location.pathname === "/test" ||
    location.pathname === "/test2"
  ) {
    return (
      <>
        <Navigation />
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            // overflow: "hidden",
            position: "sticky",
            top: 0,
            width: "100%",
            zIndex: 100,
            background: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <AppBar />
        </div>
        <div
          style={{
            marginTop: "10px",
            maxWidth: "1920px",
            margin: "10px auto 0px",
          }}
        >
          <Grid container>
            {location.pathname === "/products" && (
              <Grid
                item
                xs={2.5}
                md={2.5}
                lg={2.5}
                xl={2}
                style={{ display: matches ? "none" : "" }}
              >
                <Sidebar />
              </Grid>
            )}
            <Grid
              item
              xs={12}
              md={location.pathname === "/products" ? 9.5 : 12}
              lg={location.pathname === "/products" ? 9.5 : 12}
              xl={location.pathname === "/products" ? 10 : 12}
            >
              <Navigation />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
};

export default Layout;
