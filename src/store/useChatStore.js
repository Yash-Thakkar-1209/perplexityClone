import { create } from "zustand";
import { persist } from "zustand/middleware";

const useChatStore = create(
  persist(
    (set) => ({
      messages: [],
      loading: false,

      addMessage: (text) => {
        set((state) => ({
          messages: [
            ...state.messages,
            { id: Date.now(), text, sender: "user" },
          ],
          loading: true,
        }));

        setTimeout(() => {
          set((state) => ({
            messages: [
              ...state.messages,
              {
                id: Date.now(),
                text: "This is a sample AI answer for testing.",
                sender: "ai",
              },
            ],
            loading: false,
          }));
        }, 1500);
      },

      clearChat: () => set({ messages: [] }),
    }),
    {
      name: "chat-storage", // localStorage key
    }
  )
);

export default useChatStore;
