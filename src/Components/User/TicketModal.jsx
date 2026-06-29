import { useEffect } from "react";
import QRCode from "react-qr-code";
import {
  X,
  Calendar,
  MapPin,
  Armchair,
  Popcorn,
  Ticket,
  Receipt,
} from "lucide-react";

export default function TicketModal({ ticket, onClose, calcTotal }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!ticket) return null;

  const foods = ticket.food || [];

  const total =
    ticket.total !== undefined
      ? ticket.total
      : calcTotal
        ? calcTotal(ticket)
        : ticket.ticketPrice || 0;

  return (
    <div
      onClick={onClose}
      className="
      fixed inset-0 z-[9999]
      bg-black/70 backdrop-blur-md
      flex items-center justify-center
      p-6
    "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        relative
        w-full
        max-w-5xl
        max-h-[90vh]
        bg-[#141414]
        rounded-3xl
        border border-[#2b2b2b]
        shadow-[0_30px_80px_rgba(0,0,0,.6)]
        flex flex-col
        overflow-hidden
      "
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-[#2b2b2b] flex-shrink-0">
          <div>
            <h2 className="text-3xl font-bold">{ticket.movie}</h2>
            <p className="text-gray-400 mt-2">Mã vé: {ticket.id}</p>
          </div>

          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
          >
            <X />
          </button>
        </div>

        {/* BODY (Scroll ở đây) */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8 p-8">
            {/* LEFT */}
            <div className="space-y-5">
              <Info
                icon={<MapPin size={18} />}
                title="Rạp"
                value={ticket.cinema || "--"}
              />

              <Info
                icon={<Calendar size={18} />}
                title="Suất chiếu"
                value={ticket.time || "--"}
              />

              <Info
                icon={<Ticket size={18} />}
                title="Phòng"
                value={ticket.room || "--"}
              />

              <Info
                icon={<Armchair size={18} />}
                title="Ghế"
                value={ticket.seats || "--"}
              />

              {foods.length > 0 && (
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <Popcorn className="text-[#AA7D36]" />
                    Combo / Đồ ăn
                  </h3>

                  <div className="space-y-3">
                    {foods.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between border-b border-white/10 pb-2"
                      >
                        <span>{item.name}</span>

                        <span className="text-[#AA7D36] font-semibold">
                          {(item.price || 0).toLocaleString()}đ
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {ticket.voucher && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5">
                  <div className="flex justify-between">
                    <span>Voucher</span>

                    <span className="text-green-400 font-bold">
                      {ticket.voucher.code}
                    </span>
                  </div>

                  <p className="mt-2 text-green-300">
                    -{ticket.voucher.discount.toLocaleString()}đ
                  </p>
                </div>
              )}

              <div className="bg-[#AA7D36]/10 border border-[#AA7D36]/30 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Receipt className="text-[#AA7D36]" />
                    <span>Tổng thanh toán</span>
                  </div>

                  <span className="text-3xl font-bold text-[#AA7D36]">
                    {total.toLocaleString()}đ
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="sticky top-0 bg-white rounded-2xl p-6">
                <QRCode value={ticket.id} size={220} className="mx-auto" />

                <p className="text-center text-black font-bold mt-5">
                  {ticket.id}
                </p>

                <p className="text-center text-gray-600 text-sm mt-4">
                  Xuất trình mã QR tại cổng kiểm soát vé.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-8 py-5 border-t border-[#2b2b2b] flex justify-end gap-4 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20"
          >
            Đóng
          </button>

          <button className="px-6 py-3 rounded-xl bg-[#AA7D36] hover:bg-[#8b652d]">
            Tải PDF
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-2xl p-5">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-[#AA7D36]/10 flex items-center justify-center text-[#AA7D36]">
          {icon}
        </div>

        <span className="text-lg text-gray-300">{title}</span>
      </div>

      <span className="font-bold text-lg text-white">{value}</span>
    </div>
  );
}
