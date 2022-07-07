import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { store } from "./store";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupPage } from "./pages";
import { LoginPage } from "./pages";
import { ChatsPage } from "./pages";
import { ProfilePage } from "./pages";
import { GistsPage } from "./pages";
import { HomePage } from "./pages";
import { Header } from "./components";
import { auth } from "./services/firebase";
import { PrivateRoute } from "./hocs/PrivateRoute";
import { PublicRoute } from "./hocs/PublicRoute";
import { onAuthStateChanged } from "firebase/auth";
import { Typography } from "@mui/material";

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

const App = () => {
  const [session, setSession] = useState(null);

  const isAuth = !!session;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<p>Loading...</p>}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/signup"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <SignupPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/chats/*"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ChatsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/gists"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <GistsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <Typography sx={{ padding: "80px 40px" }}>404</Typography>
                }
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
