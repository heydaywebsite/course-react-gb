import { useState, useEffect, useCallback } from "react";
import { API } from "../../api";
import { Stack, Typography, CircularProgress } from "@mui/material";

export const GistsList = () => {
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestGists();
  }, []);

  const requestGists = async () => {
    setLoading(true);
    try {
      const response = await fetch(API.gists.URL_PUBLIC);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const result = await response.json();
      setGists(result);
    } catch (err) {
      setError(true);
      console.warn(err);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <Stack p={4} sx={{ width: "100%", overflowY: "scroll" }}>
      {gists.map(renderGist)}
    </Stack>
  );
};
