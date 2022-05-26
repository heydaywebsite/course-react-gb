import { useState } from "react";
import { useParams } from "react-router-dom";
import { List, ListItem, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledList = styled(List)`
  width: 100%;
`;
const StyledListItem = styled(ListItem)`
  width: 100%;
  padding: 20px;
  color: #ffffffb3;
  &.Mui-selected {
    background-color: #2b5278;
  }
  &.Mui-selected:hover {
    background-color: #2b5278;
  }
`;

export const ChatsList = () => {
  const [chats] = useState(["chat1", "chat2"]);
  const { chatId } = useParams();
  return (
    <StyledList>
      {chats.map((chat, index) => (
        <Link key={index} to={`/chats/${chat}`}>
          <StyledListItem selected={chatId === chat}>
            <Typography>{chat}</Typography>
          </StyledListItem>
        </Link>
      ))}
    </StyledList>
  );
};
