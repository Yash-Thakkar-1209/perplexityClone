import { render, screen } from "@testing-library/react";
import ChatBubble from "../components/ChatBubble";

test("renders user message", () => {
  render(<ChatBubble sender="user" text="Hello" />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

test("renders ai message", () => {
  render(<ChatBubble sender="ai" text="Hi user" />);
  expect(screen.getByText("Hi user")).toBeInTheDocument();
});

