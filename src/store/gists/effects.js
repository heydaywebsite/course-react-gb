import { getGistsRequest, getGistsSuccess, getGistsFailure } from "./actions";
import { API } from "../../api";

export const getAllGists = () => async (dispatch) => {
  dispatch(getGistsRequest());
  try {
    const res = await fetch(API.gists.URL_PUBLIC);
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    const result = await res.json();
    dispatch(getGistsSuccess(result));
  } catch (err) {
    dispatch(getGistsFailure(err.message));
  }
};
