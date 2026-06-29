import { MdMeetingRoom } from "react-icons/md";
import { useToast } from "../Common/ToastProvider";

export default function SeatSelector({
  selectedSeats,
  setSelectedSeats,
  bookedSeats = ["A1", "A2", "B3", "I1", "I2"],
}) {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const seatNums = Array.from({ length: 10 }, (_, i) => i + 1);
  const { showToast } = useToast();

  // ===================== CHECK BOOKED =====================
  const isBooked = (seatId) => bookedSeats.includes(seatId);

  // ===================== GET INDEX =====================
  const getIndex = (seatId) => parseInt(seatId.slice(1), 10);

  // ===================== VALIDATE CONTINUOUS =====================
  const isValidRowSelection = (row, newSeat) => {
    const current = selectedSeats
      .filter((s) => s.startsWith(row))
      .map(getIndex)
      .sort((a, b) => a - b);

    const newIndex = getIndex(newSeat);

    const all = [...current, newIndex].sort((a, b) => a - b);

    for (let i = 0; i < all.length - 1; i++) {
      if (all[i + 1] - all[i] > 1) {
        return false;
      }
    }

    return true;
  };

  // ===================== CLICK =====================
  const handleClick = (row, num) => {
    const seatId = `${row}${num}`;

    if (isBooked(seatId)) return;

    setSelectedSeats((prev) => {
      // =========================
      // 🎯 ROW I (GHẾ ĐÔI - FIX TRIỆT ĐỂ)
      // =========================
      if (row === "I") {
        const pairStart = num % 2 === 0 ? num - 1 : num;

        const a = `I${pairStart}`;
        const b = `I${pairStart + 1}`;

        const existsA = prev.includes(a);
        const existsB = prev.includes(b);

        const isSelected = existsA || existsB;

        // 👉 nếu đã chọn thì bỏ cả cặp
        if (isSelected) {
          return prev.filter((s) => s !== a && s !== b);
        }

        // 👉 chặn ghế đặt sẵn
        if (isBooked(a) || isBooked(b)) return prev;

        // 👉 thêm cả cặp
        return [...prev, a, b];
      }

      // =========================
      // 🎯 GHẾ THƯỜNG
      // =========================
      const isSelected = prev.includes(seatId);

      if (isSelected) {
        return prev.filter((s) => s !== seatId);
      }

      if (!isValidRowSelection(row, seatId)) {
        showToast(
          "Bạn phải chọn ghế liên tiếp (không bỏ trống ghế giữa)",
          "error",
        );
        return prev;
      }

      return [...prev, seatId];
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* TITLE */}
      <h2 className="text-xl font-bold mb-6">Chọn ghế</h2>

      {/* SCREEN */}
      <div className="text-center mb-6 text-gray-400">
        ─────────── MÀN HÌNH ───────────
      </div>

      {/* LEGEND */}
      <div className="flex justify-center gap-6 mb-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#1c1c1c] rounded"></div>
          <span>Còn trống</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#AA7D36] rounded"></div>
          <span>Đang chọn</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-600 rounded"></div>
          <span>Đã đặt</span>
        </div>
      </div>

      {/* EXIT */}
      <div className="flex items-center text-xs text-gray-500 mb-4 ml-20">
        <MdMeetingRoom className="text-lg mr-1" />
        LỐI RA / VÀO
      </div>

      {/* SEATS */}
      <div className="flex flex-col gap-3 items-center">
        {rows.map((row) => (
          <div key={row} className="flex items-center gap-4">
            {/* ROW I (DOUBLE SEATS) */}
            {row === "I" ? (
              <div className="flex gap-2">
                {seatNums.map((num) => {
                  const seatId = `I${num}`;
                  const booked = isBooked(seatId);

                  return (
                    <button
                      key={seatId}
                      onClick={() => handleClick(row, num)}
                      disabled={booked}
                      className={`w-10 h-10 rounded-md text-[11px] font-semibold transition ${
                        booked
                          ? "bg-gray-600 cursor-not-allowed"
                          : selectedSeats.includes(seatId)
                            ? "bg-[#AA7D36]"
                            : "bg-[#1c1c1c] hover:bg-[#333]"
                      }`}
                    >
                      {seatId}
                    </button>
                  );
                })}
              </div>
            ) : (
              <>
                {/* LEFT */}
                <div className="flex gap-2">
                  {seatNums.slice(0, 5).map((num) => {
                    const seatId = `${row}${num}`;
                    const booked = isBooked(seatId);

                    return (
                      <button
                        key={seatId}
                        onClick={() => handleClick(row, num)}
                        disabled={booked}
                        className={`w-10 h-10 rounded-md text-[11px] font-semibold transition ${
                          booked
                            ? "bg-gray-600 cursor-not-allowed"
                            : selectedSeats.includes(seatId)
                              ? "bg-[#AA7D36]"
                              : "bg-[#1c1c1c] hover:bg-[#333]"
                        }`}
                      >
                        {seatId}
                      </button>
                    );
                  })}
                </div>

                <div className="w-10 text-center text-gray-600">┃</div>

                {/* RIGHT */}
                <div className="flex gap-2">
                  {seatNums.slice(5, 10).map((num) => {
                    const seatId = `${row}${num}`;
                    const booked = isBooked(seatId);

                    return (
                      <button
                        key={seatId}
                        onClick={() => handleClick(row, num)}
                        disabled={booked}
                        className={`w-10 h-10 rounded-md text-[11px] font-semibold transition ${
                          booked
                            ? "bg-gray-600 cursor-not-allowed"
                            : selectedSeats.includes(seatId)
                              ? "bg-[#AA7D36]"
                              : "bg-[#1c1c1c] hover:bg-[#333]"
                        }`}
                      >
                        {seatId}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
