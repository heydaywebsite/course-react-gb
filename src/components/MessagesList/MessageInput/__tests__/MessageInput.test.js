import { render, screen, fireEvent } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import { MessageInput } from "../MessageInput";

jest.mock("react-redux");
const mockedUseDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("MessageInput", () => {
  it("should dispatch action", () => {
    const dispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(dispatch);
    render(<MessageInput />);
    const input = screen.getByPlaceholderText("Type a message");
    fireEvent.change(input, { target: { value: "message" } });
    expect(input.value).toBe("message");
  });
});
