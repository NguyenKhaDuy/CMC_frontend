import { Calendar } from "lucide-react";

export default function TicketCard({ ticket, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#AA7D36]"
    >
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold">{ticket.movie}</h3>

          <p className="flex items-center gap-2 text-gray-400">
            <Calendar size={14} />
            {ticket.time}
          </p>

          <p>{ticket.cinema}</p>
        </div>

        <div className="text-right">
          <p className="text-[#AA7D36]">{ticket.seats}</p>

          <p className="text-green-400">{ticket.status}</p>
        </div>
      </div>
    </div>
  );
}
