import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ChatsPage } from "./ChatsPage";
import { ProfilePage } from "./ProfilePage";
import { GistsPage } from "./GistsPage";
import { HomePage } from "./HomePage";
import { Header } from "../components";
import { PrivateRoute } from "../hocs/PrivateRoute";
import { PublicRoute } from "../hocs/PublicRoute";
import { onAuthStateChanged } from "firebase/auth";
import { Typography } from "@mui/material";

export const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);
  console.log(isAuth);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute isAuth={isAuth}>
              <HomePage />
            </PublicRoute>
          }
        />
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
          element={<Typography sx={{ padding: "80px 40px" }}>404</Typography>}
        />
      </Routes>
    </BrowserRouter>
  );
};
