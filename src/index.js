import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material";
import "./index.scss";
import "./reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  palette: {
    type: "dark",
    primary: {
      main: "#5893df",
    },
    secondary: {
      main: "#2ec5d3",
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
    text: {
      primary: "#fff",
      secondary: "#ffffffb3",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
