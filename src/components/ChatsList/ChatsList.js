import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getChatList } from "../../store/chats/selectors";
import { addChat } from "../../store/chats";
import {
  Stack,
  List,
  ListItem,
  Typography,
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ChatsWrapper = styled(Stack)`
  width: 100%;
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
  const { chatId } = useParams();

  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState("");
  const chats = useSelector(getChatList, shallowEqual);
  // const chats = useSelector((state) => state.chats.chatsList);
  const dispatch = useDispatch();
  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);
  const handleChange = (e) => setNewChatName(e.target.value);

  const onAddChat = () => {
    dispatch(addChat(newChatName));
    setNewChatName("");
    handleClose();
  };

  return (
    <>
      <ChatsWrapper>
        <StyledList>
          {chats &&
            Object.keys(chats).map((id, index) => (
              <Link key={index} to={`/chats/${chats[id].name}`}>
                <StyledListItem selected={chatId === chats[id].name}>
                  <Typography>{chats[id].name}</Typography>
                </StyledListItem>
              </Link>
            ))}
          <Typography color="text.secondary" sx={{ p: 4 }} onClick={handleOpen}>
            Add chat...
          </Typography>
        </StyledList>
      </ChatsWrapper>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Please enter a name for new chat</DialogTitle>
        <TextField value={newChatName} onChange={handleChange} />
        <Button onClick={onAddChat} disabled={!newChatName}>
          Submit
        </Button>
      </Dialog>
    </>
  );
};
