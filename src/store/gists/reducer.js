import {
  GET_GISTS_REQUEST,
  GET_GISTS_SUCCESS,
  GET_GISTS_FAILURE,
} from "./types";

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

const initialState = {
  gists: [],
  request: STATUSES.IDLE,
  error: null,
  loading: false,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
        loading: true,
      };
    case GET_GISTS_SUCCESS:
      return {
        ...state,
        gists: action.payload,
        request: STATUSES.SUCCESS,
        error: null,
        loading: false,
      };
    case GET_GISTS_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
