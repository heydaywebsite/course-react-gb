import { useState } from "react";
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

export const MessageInput = ({ callbackMessage }, ref) => {
  const [value, setValue] = useState("");

  const sendMessage = () => {
    if (value) {
      callbackMessage(value);
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
