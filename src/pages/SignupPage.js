import { useState } from "react";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";

const MainWrapper = styled(Stack)`
  height: 100%;
  padding-top: 60px;
  overflow-y: scroll;
`;

const StyledLink = styled.span`
  color: #5893df;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #5893df;
    cursor: pointer;
  }
`;

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Stack sx={{ height: "100%" }}>
      <MainWrapper bgcolor="background.default">
        <form onSubmit={handleSubmit}>
          <Typography color="text.secondary" p={4}>
            Fill in the form below to register new account
          </Typography>
          <Box px={4} py={2}>
            <TextField
              sx={{ paddingBottom: "40px" }}
              name="email"
              type="email"
              label="E-mail"
              variant="standard"
              onChange={handleEmailChange}
              value={email}
            />
            <br />
            <TextField
              name="password"
              type="password"
              label="Password"
              variant="standard"
              onChange={handlePassChange}
              value={password}
              autoComplete="off"
            />
            <br />
          </Box>
          {error && (
            <Typography color="error" px={4} py={2}>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="outlined" sx={{ margin: "30px" }}>
            Signup
          </Button>
          <Typography color="text.secondary" p={4}>
            Already have an account?{" "}
            <StyledLink>
              <Link to="/login">Log in</Link>
            </StyledLink>
          </Typography>
        </form>
      </MainWrapper>
    </Stack>
  );
};
