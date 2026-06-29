import { useEffect, useRef, useState } from "react";
import logo from "../../assets/CMC_LOGO.png";

import FloatingButton from "../../Components/User/FloatingButton";
import ChatMessages from "../../Components/User/ChatMessages";
import QuickActions from "../../Components/User/QuickActions";
import ChatInput from "../../Components/User/ChatInput";
import ChatHistory from "./ChatHistory";
import ChatHeader from "../../Components/User/ChatHeader"

export default function CmcAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showHistory, setShowHistory] = useState(false);

 const defaultMessages = [
   {
     sender: "bot",
     text: "👋 Xin chào! Tôi là CmcAI.\nTôi có thể giúp bạn tìm phim, lịch chiếu, rạp và đặt vé.",
   },
 ];

 const [chats, setChats] = useState([
   {
     id: 1,
     title: "Cuộc trò chuyện mới",
     messages: defaultMessages,
   },
 ]);

 const [currentChatId, setCurrentChatId] = useState(1);

  const bottomRef = useRef(null);

  // useEffect(() => {
  //   bottomRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }, [messages]);

  const currentChat = chats.find((chat) => chat.id === currentChatId);

  const sendMessage = () => {
    if (!input.trim()) return;

    const text = input;

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  sender: "user",
                  text,
                },
              ],
            }
          : chat,
      ),
    );

    setInput("");

    setTimeout(() => {
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  {
                    sender: "bot",
                    text: `Bạn vừa hỏi:\n"${text}"`,
                  },
                ],
              }
            : chat,
        ),
      );
    }, 800);
  };
  

  const quickQuestions = [
    "🎬 Phim đang chiếu",
    "🎟 Đặt vé",
    "🏢 Rạp gần tôi",
    "⭐ Khuyến mãi",
  ];

  const newChat = () => {
    const id = Date.now();

    setChats((prev) => [
      {
        id,
        title: `Chat ${prev.length + 1}`,
        messages: defaultMessages,
      },
      ...prev,
    ]);

    setCurrentChatId(id);
  };

  return (
    <>
      {!open && <FloatingButton logo={logo} onClick={() => setOpen(true)} />}

      {open && (
        <div
          className="
          fixed bottom-6 right-6
          w-[390px]
          h-[620px]
          bg-[#151515]
          border border-[#2d2d2d]
          rounded-3xl
          shadow-2xl
          flex flex-col
          overflow-hidden
          z-50"
        >
          <ChatHistory
            chats={chats}
            currentChatId={currentChatId}
            setCurrentChatId={setCurrentChatId}
            newChat={newChat}
            show={showHistory}
            onClose={() => setShowHistory(false)}
          />

          <div className="flex-1 flex flex-col">
            <ChatHeader
              logo={logo}
              onClose={() => setOpen(false)}
              onHistory={() => setShowHistory(true)}
            />

            <ChatMessages
              logo={logo}
              messages={currentChat.messages}
              bottomRef={bottomRef}
            />

            <QuickActions questions={quickQuestions} onSelect={setInput} />

            <ChatInput
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      )}
    </>
  );
}
