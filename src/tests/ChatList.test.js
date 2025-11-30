import { render, screen } from "@testing-library/react";
import ChatList from "../components/ChatList";
import useChatStore from "../store/useChatStore";

describe("ChatList Component", () => {
  beforeEach(() => {
    useChatStore.setState({
      messages: [],
      loading: false,
    });
  });

  test("renders empty state correctly", () => {
    render(<ChatList />);
    expect(screen.queryByText(/./)).not.toBeInTheDocument();
  });

  test("renders messages", () => {
    useChatStore.setState({
      messages: [
        { id: 1, text: "First message", sender: "user" },
        { id: 2, text: "Second message", sender: "ai" },
      ],
      loading: false,
    });

    render(<ChatList />);

    expect(screen.getByText("First message")).toBeInTheDocument();
    expect(screen.getByText("Second message")).toBeInTheDocument();
  });

  test("shows loader when loading", () => {
    useChatStore.setState({
      messages: [],
      loading: true,
    });

    render(<ChatList />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
