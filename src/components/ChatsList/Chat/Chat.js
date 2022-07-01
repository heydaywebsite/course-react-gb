import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export const Chat = ({ name }) => {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemText secondary={name} />
      </ListItemButton>
    </ListItem>
  );
};
