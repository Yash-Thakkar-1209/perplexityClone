import ChatBubble from "../components/ChatBubble";

export default {
  title: "Chat/ChatBubble",
  component: ChatBubble,
};

export const User = {
  args: {
    sender: "user",
    text: "Hello from user!",
  },
};

export const AI = {
  args: {
    sender: "ai",
    text: "Hello from AI!",
  },
};
