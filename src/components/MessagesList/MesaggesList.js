import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addMessageWithFirebase } from "../../store/messages";
import { getMessagesList } from "../../store/messages";
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

export const MessagesList = () => {
  // const messages = useSelector((state) => state.messages.messagesList);
  const messages = useSelector(getMessagesList, shallowEqual);

  const { chatId } = useParams();

  const dispatch = useDispatch();

  const getBotMessage = () => ({
    message: "Hello from bot! Tap '0' or '1'",
    author: "Bot",
  });

  const getBotAnswer = (message) => {
    const answers = {
      0: "Your choice is '0'",
      1: "Your choice is '1'",
    };

    return { message: answers[message] || "not found answer", author: "Bot" };
  };

  useEffect(() => {
    const firstBotMessage = getBotMessage();
    dispatch(
      addMessageWithFirebase(
        chatId,
        firstBotMessage.message,
        firstBotMessage.author
      )
    );
  }, [chatId, dispatch]);

  useEffect(() => {
    const lastMessage =
      (messages &&
        messages[chatId] &&
        messages[chatId].length &&
        messages[chatId][messages[chatId].length - 1]) ||
      null;
    if (lastMessage && lastMessage.author !== "Bot") {
      const botMessage = getBotAnswer(lastMessage?.message);
      setTimeout(
        () =>
          dispatch(
            addMessageWithFirebase(
              chatId,
              botMessage.message,
              botMessage.author
            )
          ),
        2000
      );
    }
  }, [messages, chatId, dispatch]);

  return (
    <>
      <MessagesWrapper direction="row">
        <List sx={{ height: "100%", padding: "30px" }}>
          {messages &&
            messages[chatId]?.map((message) => (
              <StyledListItem
                key={message?.id}
                sx={
                  message?.author === "User"
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
        <MessageInput />
      </InputWrapper>
    </>
  );
};
