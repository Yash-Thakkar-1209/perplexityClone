import React, { useState } from "react";
import { Button } from "./ui/button";
import useChatStore from "@/store/useChatStore";
import { Input } from "@/components/ui/input";

const InputBox = () => {
  const [text, setText] = useState("");

  const { addMessage, clearChat } = useChatStore();

  const send = () => {
    if (!text.trim()) return;
    addMessage(text);
    setText("");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full py-4 border-t">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 p-3 rounded-md bg-muted text-foreground outline-none"
            placeholder="Type a message…"
          />

          <div className="flex gap-2">
            <Button className="flex-1" onClick={send}>
              Send
            </Button>
            <Button className="flex-1" onClick={clearChat}>
              Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
