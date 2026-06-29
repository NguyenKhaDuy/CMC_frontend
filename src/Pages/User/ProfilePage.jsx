import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Ticket, History, Settings } from "lucide-react";

import ProfileHeader from "../../Components/User/ProfileHeader";
import ProfileTabs from "../../Components/User/ProfileTabs";
import TicketList from "../../Components/User/TicketList";
import TicketModal from "../../Components/User/TicketModal";
import HistoryTab from "../../Components/User/HistoryTab";
import InfoTab from "../../Components/User/InfoTab";
import SettingsTab from "../../Components/User/SettingsTab";

const tabs = [
  { id: "info", label: "Hồ sơ", icon: User },
  { id: "tickets", label: "Vé của tôi", icon: Ticket },
  { id: "history", label: "Lịch sử", icon: History },
  { id: "settings", label: "Cài đặt", icon: Settings },
];

const tickets = [
  {
    id: "TICKET-001",
    movie: "Avengers: Endgame",
    time: "20:00 - 29/06/2026",
    cinema: "CGV Bạc Liêu",
    room: "Room 2",
    seats: "A10, A11",
    food: [
      { name: "Combo bắp + nước", price: 50000 },
      { name: "Hotdog", price: 30000 },
    ],
    voucher: {
      code: "SALE20",
      discount: 20000,
    },
    ticketPrice: 90000,
    status: "Đã thanh toán",
  },
];

const historyData = [
  {
    id: "HD001",
    movie: "Avengers: Endgame",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    cinema: "CGV Bạc Liêu",
    room: "Room 2",
    seats: "A10, A11",
    time: "20:00 - 29/06/2026",
    total: 210000,
    status: "Đã xem",
    rating: 0,
  },
  {
    id: "HD002",
    movie: "Spider-Man: No Way Home",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    cinema: "Galaxy Bạc Liêu",
    room: "Room 1",
    seats: "B5, B6",
    time: "18:30 - 26/06/2026",
    total: 180000,
    status: "Đã xem",
    rating: 4,
  },
];

export default function ProfilePage() {
  const [tab, setTab] = useState("tickets");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [history, setHistory] = useState(historyData);

  const navigate = useNavigate();

  const calcTotal = (t) => {
    const food = t.food.reduce((a, b) => a + b.price, 0);

    return t.ticketPrice + food - (t.voucher?.discount || 0);
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B] to-black">
      <div className="max-w-6xl mx-auto pt-24 pb-20 px-4">
        <ProfileHeader />

        <ProfileTabs tabs={tabs} tab={tab} setTab={setTab} />

        <div className="mt-6 space-y-4">
          {tab === "tickets" && (
            <TicketList
              tickets={tickets}
              setSelectedTicket={setSelectedTicket}
            />
          )}

          {tab === "history" && (
            <HistoryTab
              history={history}
              setSelectedTicket={setSelectedTicket}
            />
          )}

          {tab === "info" && <InfoTab />}

          {tab === "settings" && <SettingsTab navigate={navigate} />}
        </div>
      </div>

      {selectedTicket && (
        <TicketModal
          ticket={selectedTicket}
          calcTotal={calcTotal}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
}
