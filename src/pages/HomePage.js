import PropTypes from "prop-types";
import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const HomePage = () => {
  const MainWrapper = styled(Stack)`
    height: 100%;
    padding-top: 60px;
  `;

  const StyledLink = styled(Typography)`
    width: fit-content;
    color: #5893df;
    border-bottom: 2px solid transparent;
    margin-bottom: 10px;
    &:hover {
      border-bottom: 2px solid #5893df;
      cursor: pointer;
    }
  `;

  return (
    <Stack sx={{ height: "100%" }}>
      <MainWrapper bgcolor="background.default">
        <Typography color="text.secondary" p={4}>
          Home Page
        </Typography>
        <Box p={4}>
          <StyledLink>
            <Link to="/login">Sign In</Link>
          </StyledLink>
          <StyledLink>
            <Link to="/signup">Sign Up</Link>
          </StyledLink>
        </Box>
      </MainWrapper>
    </Stack>
  );
};

HomePage.propTypes = {};
