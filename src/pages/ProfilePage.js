import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";
import {
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import styled from "@emotion/styled";

const MainWrapper = styled(Stack)`
  height: 100%;
  padding-top: 72px;
`;

export const ProfilePage = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <Stack sx={{ height: "100%" }}>
      <MainWrapper bgcolor="background.default" p={4}>
        <Typography color="text.secondary">Profile Page</Typography>
        <FormGroup>
          <FormControlLabel
            sx={{ color: "#ffffffb3" }}
            control={
              <Checkbox
                color="primary"
                checked={profile.isVisibleProfile}
                onChange={() => dispatch(toggleVisibleProfile())}
              />
            }
            label={profile.isVisibleProfile && profile.name}
          />
        </FormGroup>
      </MainWrapper>
    </Stack>
  );
};

ProfilePage.propTypes = {};
