import { Stack, Grid } from "@mui/material";
import { ChatsList } from "../ChatsList/ChatsList";
import { MessagesList } from "../MessagesList/MesaggesList";

export const Layout = () => {
  return (
    <Stack sx={{ height: "100%" }}>
      <Stack
        direction="row"
        color="text.secondary"
        bgcolor="secondary.dark"
        sx={{
          width: "100%",
          height: "60px",
          padding: "20px",
          position: "fixed",
          top: 0,
          zIndex: 1,
        }}
      >
        Header
      </Stack>
      <Stack direction="row" sx={{ height: "100%", paddingTop: "60px" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid
            item
            md={3}
            bgcolor="background.default"
            sx={{ height: "100%" }}
          >
            <ChatsList />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md={9}
            bgcolor="background.paper"
            sx={{ height: "100%" }}
          >
            <MessagesList />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};
