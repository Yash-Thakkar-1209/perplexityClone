import { cn } from "@/lib/utils";

function ChatBubble({ text, sender }) {
  const isUser = sender === "user";

  return (
    <div
      className={cn(
        "p-3 rounded-xl w-fit max-w-[75%] mb-3",
        isUser
          ? "bg-primary text-primary-foreground ml-auto"
          : "bg-muted text-muted-foreground mr-auto"
      )}
    >
      {text}
    </div>
  );
}

export default ChatBubble;
