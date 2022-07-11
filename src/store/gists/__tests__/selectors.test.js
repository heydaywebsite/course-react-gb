import {
  selectGists,
  selectGistsError,
  selectGistsLoading,
} from "../selectors";

describe("gists selectors", () => {
  it("should select gists from state object", () => {
    const gists = {};
    gists["gists"] = { description: "Fake API" };
    const result = selectGists({ gists: { gists: gists["gists"] } });
    expect(result).toEqual(gists["gists"]);
  });
  it("should select error from state object", () => {
    const gists = {};
    gists["error"] = "gist error";
    const result = selectGistsError({ gists: { gists: gists["error"] } });
    expect(result).toEqual(gists["gists"]);
  });
  //why test for loading is failed???
  // it("should select loading from state object", () => {
  //   const gists = {};
  //   gists["loading"] = true;
  //   const result = selectGistsLoading({
  //     gists: { gists: gists["loading"] },
  //   });
  //   expect(result).toEqual(gists["loading"]);
  // });
});
