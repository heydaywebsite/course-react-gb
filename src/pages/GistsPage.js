import PropTypes from "prop-types";
import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { GistsList } from "../components";

export const GistsPage = () => {
  const MainWrapper = styled(Stack)`
    height: 100%;
    padding-top: 60px;
  `;

  return (
    <Stack sx={{ height: "100%" }}>
      <MainWrapper direction="row" bgcolor="background.default">
        <Typography color="text.secondary" p={4}>
          Gists Page
        </Typography>
        <GistsList />
      </MainWrapper>
    </Stack>
  );
};

GistsPage.propTypes = {};
