import useChatStore from "../store/useChatStore";

describe("Chat Store Tests", () => {
  beforeEach(() => {
    // reset store before each test
    useChatStore.setState({ messages: [], loading: false });
  });

  test("should add a user message", () => {
    const { addMessage } = useChatStore.getState();

    addMessage("Hello");

    const { messages } = useChatStore.getState();

    expect(messages[0].text).toBe("Hello");
    expect(messages[0].sender).toBe("user");
  });

  test("should clear all messages", () => {
    const { addMessage, clearChat } = useChatStore.getState();

    addMessage("Hi");
    clearChat();

    expect(useChatStore.getState().messages.length).toBe(0);
  });
});
