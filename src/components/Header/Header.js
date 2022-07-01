import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import styled from "@emotion/styled";

const StyledLink = styled(Typography)`
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #ffffffb3;
    cursor: pointer;
  }
`;

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <EmojiNatureIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BeeChat
        </Typography>
        <Stack>
          <List sx={{ display: "flex" }}>
            <ListItem>
              <StyledLink>
                <Link to="/">Home</Link>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink>
                <Link to="/profile">Profile</Link>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink>
                <Link to="/chats">Chats</Link>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink>
                <Link to="/gists">Gists</Link>
              </StyledLink>
            </ListItem>
          </List>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};
