import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import { MessagesList } from "../components";
import { ChatsList } from "../components";
import { Typography } from "@mui/material";

export const ChatsPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            messages={
              <Typography color="text.secondary" sx={{ p: 4 }}>
                Выберите чат...
              </Typography>
            }
            chats={<ChatsList />}
          />
        }
      />

      <Route
        path=":chatId"
        element={<Layout messages={<MessagesList />} chats={<ChatsList />} />}
      />
    </Routes>
  );
};

ChatsPage.propTypes = {};
