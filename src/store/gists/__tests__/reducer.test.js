import { gistsReducer, STATUSES } from "../reducer";
import { getGistsFailure, getGistsSuccess } from "../actions";

describe("gists reducer", () => {
  describe("get gists types", () => {
    it("gists failure", () => {
      const ERROR = "test error";
      const state = gistsReducer(
        { request: STATUSES.SUCCESS, error: null, loading: false },
        getGistsFailure(ERROR)
      );
      expect(state.request).toBe(STATUSES.FAILURE);
      expect(state.error).toBe(ERROR);
      expect(state.loading).toBe(false);
    });
    it("gists success", () => {
      const GISTS = [
        { gists: { description: "Fake API" } },
        { gists: { description: "Real API" } },
      ];
      const state = gistsReducer(
        {
          gists: GISTS,
          request: STATUSES.ERROR,
          error: "test error",
          loading: false,
        },
        getGistsSuccess(GISTS)
      );
      expect(state.request).toBe(STATUSES.SUCCESS);
      expect(state.error).toBe(null);
      expect(state.gists).toBe(GISTS);
      expect(state.loading).toBe(false);
    });
  });
  describe("should return default state when passed an empty action", () => {
    const initialState = {
      gists: [],
      request: STATUSES.IDLE,
      error: null,
      loading: false,
    };
    const result = gistsReducer(undefined, { type: "" });
    expect(result).toEqual(initialState);
  });
});
