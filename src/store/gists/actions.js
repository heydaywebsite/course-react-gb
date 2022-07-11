import {
  GET_GISTS_REQUEST,
  GET_GISTS_SUCCESS,
  GET_GISTS_FAILURE,
} from "./types";

export const getGistsRequest = () => ({
  type: GET_GISTS_REQUEST,
});
export const getGistsSuccess = (data) => ({
  type: GET_GISTS_SUCCESS,
  payload: data,
});
export const getGistsFailure = (err) => ({
  type: GET_GISTS_FAILURE,
  payload: err,
});
