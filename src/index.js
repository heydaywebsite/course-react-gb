import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AppRoutes } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material";
import { store } from "./store";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
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
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<p>Loading...</p>}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
