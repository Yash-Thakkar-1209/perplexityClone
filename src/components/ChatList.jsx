import React, { useEffect, useRef } from "react";
import Loader from "./Loader";
import useChatStore from "@/store/useChatStore";
import ChatBubble from "./ChatBubble";

const ChatList = () => {
  const { messages, loading } = useChatStore();

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll whenever messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex justify-center w-full h-[calc(100vh-180px)] no-scrollbar overflow-y-auto px-4">
      <div className="w-full max-w-2xl p-4 pb-28">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} text={msg.text} sender={msg.sender} />
        ))}

        {loading && <Loader />}

        {/* This div helps us auto scroll */}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
};

export default ChatList;
