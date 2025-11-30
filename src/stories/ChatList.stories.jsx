import ChatList from "../components/ChatList";
import useChatStore from "@/store/useChatStore";

export default {
  title: "Chat/ChatList",
  component: ChatList,
};

export const WithMessages = {
  render: () => {
    useChatStore.setState({
      messages: [
        { id: 1, text: "Hi", sender: "user" },
        { id: 2, text: "Hello!", sender: "ai" },
      ],
    });

    return <ChatList />;
  },
};
