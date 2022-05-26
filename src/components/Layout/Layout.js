import { Stack, Grid } from "@mui/material";
import styled from "@emotion/styled";

export const Layout = ({ chats, messages }) => {
  const MainWrapper = styled(Stack)`
    height: 100%;
    padding-top: 60px;
  `;
  const ChatsWrapper = styled(Grid)`
    height: 100%;
  `;
  const MessagesWrapper = styled(Grid)`
    height: 100%;
  `;

  return (
    <Stack sx={{ height: "100%" }}>
      <MainWrapper direction="row">
        <ChatsWrapper item container md={3} bgcolor="background.default">
          {chats}
        </ChatsWrapper>
        <MessagesWrapper
          item
          container
          direction="column"
          md={9}
          bgcolor="background.paper"
        >
          {messages}
        </MessagesWrapper>
      </MainWrapper>
    </Stack>
  );
};
