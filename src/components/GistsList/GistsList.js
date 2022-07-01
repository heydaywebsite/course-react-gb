import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGists,
  selectGists,
  selectGistsError,
  selectGistsLoading,
} from "../../store/gists";
import { Stack, Typography, CircularProgress, Button } from "@mui/material";

export const GistsList = () => {
  const dispatch = useDispatch();
  const gists = useSelector(selectGists);
  const error = useSelector(selectGistsError);
  const loading = useSelector(selectGistsLoading);

  const requestGists = () => {
    dispatch(getAllGists());
  };

  useEffect(() => {
    requestGists();
  }, []);

  const renderGist = useCallback(
    (gist) =>
      gist.description ? (
        <Typography color="text.secondary" key={gist.id}>
          {gist.description}
        </Typography>
      ) : (
        <Typography color="text.secondary" key={gist.id}>
          No description
        </Typography>
      ),
    []
  );

  if (loading) {
    return (
      <Stack p={4} sx={{ width: "100%" }}>
        <CircularProgress />
      </Stack>
    );
  }

  if (error) {
    return (
      <Stack p={4}>
        <Typography color="text.secondary" p={2}>
          Error
        </Typography>
        <Button onClick={requestGists}>Retry</Button>
      </Stack>
    );
  }

  return (
    <Stack p={4} sx={{ width: "100%", overflowY: "scroll" }}>
      {gists.map(renderGist)}
    </Stack>
  );
};
