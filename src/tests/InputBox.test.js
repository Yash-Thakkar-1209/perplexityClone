import { render, screen, fireEvent } from "@testing-library/react";
import InputBox from "../components/InputBox";
import useChatStore from "../store/useChatStore";

describe("InputBox Component", () => {
  test("renders input and buttons", () => {
    render(<InputBox />);

    expect(screen.getByPlaceholderText("Type a message…")).toBeInTheDocument();
    expect(screen.getByText("Send")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
  });

  test("updates input value", () => {
    render(<InputBox />);
    const input = screen.getByPlaceholderText("Type a message…");

    fireEvent.change(input, { target: { value: "Hello" } });
    expect(input.value).toBe("Hello");
  });

  test("calls addMessage when clicking Send", () => {
    const addMessage = vi.spyOn(useChatStore.getState(), "addMessage");

    render(<InputBox />);
    const input = screen.getByPlaceholderText("Type a message…");
    const sendBtn = screen.getByText("Send");

    fireEvent.change(input, { target: { value: "Test Message" } });
    fireEvent.click(sendBtn);

    expect(addMessage).toHaveBeenCalledWith("Test Message");
  });

  test("clears chat when Clear button clicked", () => {
    const clearChat = vi.spyOn(useChatStore.getState(), "clearChat");

    render(<InputBox />);
    fireEvent.click(screen.getByText("Clear"));

    expect(clearChat).toHaveBeenCalled();
  });
});
