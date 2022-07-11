import { render } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import { GistsList } from "../GistsList";

const gists = [
  { id: 453, description: "Fake API" },
  { id: 454, description: "Real API" },
];

jest.mock("react-redux");
const mockedUseSelector = jest.spyOn(reduxHooks, "useSelector");
const mockedUseDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("GistsList", () => {
  it("should create GistsList with empty gists", () => {
    mockedUseSelector.mockReturnValue([]);
    mockedUseDispatch.mockReturnValue(jest.fn());
    const component = render(<GistsList />);
    expect(component).toMatchSnapshot();
  });
  it("should create GistsList with gists items", () => {
    mockedUseSelector.mockReturnValue(gists);
    mockedUseDispatch.mockReturnValue(jest.fn());
    const component = render(<GistsList />);
    expect(component).toMatchSnapshot();
  });
});
