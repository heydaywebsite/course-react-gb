import { useState } from "react";
import { List } from "@mui/material";
import { Chat } from "./Chat/Chat";

export const ChatsList = () => {
  const [chats] = useState(["room1", "room2", "room3"]);

  return (
    <List>
      {chats.map((chat, index) => (
        <Chat key={index} name={chat} />
      ))}
    </List>
  );
};
