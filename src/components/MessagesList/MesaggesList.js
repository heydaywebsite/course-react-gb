import { useState, useEffect } from "react";
import { Message } from "./Message/Message";
import { Stack, List, ListItem } from "@mui/material";
import { MessageInput } from "./MessageInput/MessageInput";

const botMessage = { author: "bot", message: "hi" };

export const MessagesList = () => {
  const [messagesList, setMessageList] = useState([botMessage]);

  const callbackMessage = (value) => {
    setMessageList([...messagesList, { author: "user", message: value }]);
  };

  useEffect(() => {
    let lastMessage = messagesList.at(-1);
    let timerId = null;
    if (messagesList.length && lastMessage.author === "user") {
      timerId = setTimeout(() => {
        setMessageList([...messagesList, botMessage]);
      }, 2000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messagesList]);

  return (
    <>
      <Stack
        direction="row"
        sx={{ height: "100%", marginBottom: "120px", overflowY: "scroll" }}
      >
        <List sx={{ height: "100%", padding: "30px" }}>
          {messagesList.map((message, index) => (
            <ListItem
              key={index}
              sx={
                message.author === "user"
                  ? {
                      backgroundColor: "info.main",
                      marginBottom: "10px",
                      borderRadius: "3px",
                    }
                  : {
                      backgroundColor: "info.dark",
                      marginBottom: "20px",
                      borderRadius: "3px",
                    }
              }
            >
              <Message message={message} />
            </ListItem>
          ))}
        </List>
      </Stack>
      <Stack
        direction="row"
        bgcolor="primary.dark"
        sx={{
          width: "100%",
          height: "120px",
          position: "fixed",
          bottom: 0,
        }}
      >
        <MessageInput callbackMessage={callbackMessage} />
      </Stack>
    </>
  );
};
