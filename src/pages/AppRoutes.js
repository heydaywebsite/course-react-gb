import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatsPage } from "./ChatsPage";
import { ProfilePage } from "./ProfilePage";
import { GistsPage } from "./GistsPage";
import { HomePage } from "./HomePage";
import { Header } from "../components";
import { Typography } from "@mui/material";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chats/*" element={<ChatsPage />} />
        <Route path="/gists" element={<GistsPage />} />
        <Route
          path="*"
          element={<Typography sx={{ padding: "80px 40px" }}>404</Typography>}
        />
      </Routes>
    </BrowserRouter>
  );
};
