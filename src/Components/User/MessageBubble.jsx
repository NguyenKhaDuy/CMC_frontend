import { User } from "lucide-react";

export default function MessageBubble({ message, logo }) {
  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
        max-w-[80%]
        rounded-2xl
        px-4
        py-3
        whitespace-pre-line
        ${message.sender === "user" ? "bg-[#AA7D36]" : "bg-[#242424]"}`}
      >
        <div className="flex gap-2 items-start">
          {message.sender === "bot" ? (
            <img src={logo} alt="" className="w-8 h-8 object-contain" />
          ) : (
            <User size={18} />
          )}

          <span>{message.text}</span>
        </div>
      </div>
    </div>
  );
}
