import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";
import { Stack, List, ListItem } from "@mui/material";
import styled from "@emotion/styled";

const StyledListItem = styled(ListItem)`
  border-radius: 3px;
  margin-bottom: 10px;
`;

const MessagesWrapper = styled(Stack)`
  height: 100%;
  margin-bottom: 120px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    margin-right: 5px;
  },
  &::-webkit-scrollbar-track {
    background: #ffffffb3;
    border-radius: 100px;
  },
  &::-webkit-scrollbar-thumb {
    background: #6B7786;
    border-radius: 100px;
  },
`;

const InputWrapper = styled(Stack)`
  width: 100%;
  height: 120px;
  position: fixed;
  bottom: 0;
`;

const getBotMessage = () => ({
  author: "Bot",
  message: "Hello from bot! Tap '0' or '1'",
  date: new Date(),
});

const getBotAnswer = (message) => {
  const answers = {
    0: "Your choice is '0'",
    1: "Your choice is '1'",
  };

  return answers[message] || "not found answer";
};

export const MessagesList = () => {
  const { chatId } = useParams();
  const [messagesList, setMessageList] = useState({ chat1: [getBotMessage()] });

  const callbackMessage = useCallback(
    (author = "User", message) => {
      if (message) {
        setMessageList((state) => ({
          ...state,
          [chatId]: [...(state[chatId] ?? []), { author, message }],
        }));
      }
    },
    [chatId]
  );

  useEffect(() => {
    const messages = messagesList[chatId] ?? [];
    const lastMessage = messages.at(-1);
    let timerId = null;
    if (messages.length && lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        setMessageList(
          callbackMessage("Bot", getBotAnswer(lastMessage.message))
        );
      }, 2000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messagesList, chatId, callbackMessage]);

  const messages = messagesList[chatId] ?? [];

  return (
    <>
      <MessagesWrapper direction="row">
        <List sx={{ height: "100%", padding: "30px" }}>
          {messages.map((message, index) => (
            <StyledListItem
              key={index}
              sx={
                message?.author === "user"
                  ? {
                      backgroundColor: "info.main",
                    }
                  : {
                      backgroundColor: "info.dark",
                    }
              }
            >
              <Message message={message} />
            </StyledListItem>
          ))}
        </List>
      </MessagesWrapper>
      <InputWrapper direction="row" bgcolor="primary.dark">
        <MessageInput callbackMessage={callbackMessage} />
      </InputWrapper>
    </>
  );
};
