import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getChatList } from "../../store/chats/selectors";
import { addChat } from "../../store/chats";
import {
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
      <StyledList>
        {chats &&
          Object.keys(chats).map((id, index) => (
            <Link key={index} to={`/chats/${id}`}>
              <StyledListItem selected={chatId === id}>
                <Typography>{chats[id].name}</Typography>
              </StyledListItem>
            </Link>
          ))}
        <Typography color="text.secondary" sx={{ p: 4 }} onClick={handleOpen}>
          Add chat...
        </Typography>
      </StyledList>
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
