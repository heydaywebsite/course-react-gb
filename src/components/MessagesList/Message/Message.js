import { ListItemText } from "@mui/material";

export const Message = ({ message }) => {
  return (
    <ListItemText primary={message.message} secondary={message.author} />
  );
};
