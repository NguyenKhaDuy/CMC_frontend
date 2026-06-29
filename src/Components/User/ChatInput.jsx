import { SendHorizonal, Sparkles } from "lucide-react";

export default function ChatInput({ input, setInput, sendMessage }) {
  return (
    <div className="border-t border-[#2d2d2d] p-4">
      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Nhập tin nhắn..."
          className="
          flex-1
          bg-[#242424]
          rounded-xl
          px-4
          outline-none"
        />

        <button
          onClick={sendMessage}
          className="
          w-12
          h-12
          rounded-xl
          bg-[#AA7D36]
          hover:bg-[#8b652d]
          flex
          items-center
          justify-center"
        >
          <SendHorizonal size={20} />
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
        <Sparkles size={14} />
        Powered by CmcAI
      </div>
    </div>
  );
}
