import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMessage } from "../../../store/messages";
import { TextField, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import styled from "@emotion/styled";

const StyledIcon = styled(Send)`
  color: #2b5278;
  &:hover {
    cursor: pointer;
    color: #4989dc;
  }
`;

export const MessageInput = () => {
  const { chatId } = useParams();

  const dispatch = useDispatch();

  const onAddMessage = (message) => dispatch(addMessage(chatId, message));

  const [value, setValue] = useState("");

  const sendMessage = () => {
    if (value) {
      onAddMessage({ message: value, author: "User" });
      setValue("");
    }
  };

  const handleEnterPress = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  return (
    <TextField
      variant="filled"
      color="text.secondary"
      sx={{ width: "75%", p: 5 }}
      autoFocus={true}
      value={value}
      placeholder="Type a message"
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => handleEnterPress(e)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {value && <StyledIcon onClick={sendMessage} />}
          </InputAdornment>
        ),
      }}
    />
  );
};
