import MessageBubble from "./MessageBubble";

export default function ChatMessages({ messages, logo, bottomRef }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} logo={logo} />
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}
