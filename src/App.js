import Navigation from "./pages/Navigation";
import "./App.css";
import Container from "@mui/material/Container";
import { CartContextProvider } from "./context/CartContext";
import { SnackbarProvider } from "notistack";
import Slide from "@mui/material/Slide";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Layout from "./pages/Layout";
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#F5B041",
      // main: "#ff793f",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#fff",
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: "#2b2a29",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#fff",
    },
    info: {
      // light: will be calculated from palette.primary.main,
      main: "#154360",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Inter",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <>
    
      <Router>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={1}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            TransitionComponent={Slide}
          >
            <CartContextProvider>
              <Layout />
              {/* <Navigation /> */}
              {/* <Home /> */}
            </CartContextProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </Router>
      {/* </Container> */}
    </>
  );
}

export default App;
