import { useState } from "react";
import { Calendar, MapPin, Star, Ticket, Clock } from "lucide-react";

export default function HistoryTab({ history, setSelectedTicket }) {
  const [historyData, setHistoryData] = useState(history);

  const handleRating = (movieId, star) => {
    setHistoryData((prev) =>
      prev.map((item) =>
        item.id === movieId ? { ...item, rating: star } : item,
      ),
    );
  };

  const handleComment = (movieId, comment) => {
    setHistoryData((prev) =>
      prev.map((item) =>
        item.id === movieId
          ? { ...item, comment: comment.slice(0, 300) }
          : item,
      ),
    );
  };

  const handleSubmitReview = (movieId) => {
    const movie = historyData.find((i) => i.id === movieId);

    if (!movie.rating) {
      alert("Vui lòng chọn số sao.");
      return;
    }

    if (!movie.comment?.trim()) {
      alert("Vui lòng nhập nhận xét.");
      return;
    }

    // TODO: gọi API

    setHistoryData((prev) =>
      prev.map((item) =>
        item.id === movieId
          ? {
              ...item,
              reviewed: true,
            }
          : item,
      ),
    );

    alert("Đánh giá thành công!");
  };

  return (
    <div className="space-y-6">
      {historyData.map((item) => (
        <div
          key={item.id}
          className="bg-[#181818] border border-[#2a2a2a] rounded-2xl p-5"
        >
          <div className="flex flex-col md:flex-row gap-5">
            {/* Poster */}
            <img
              src={item.poster}
              alt={item.movie}
              className="w-32 h-44 rounded-xl object-cover"
            />

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">{item.movie}</h2>

              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  {item.cinema}
                </p>

                <p className="flex items-center gap-2">
                  <Ticket size={16} />
                  {item.room} • Ghế {item.seats}
                </p>

                <p className="flex items-center gap-2">
                  <Clock size={16} />
                  {item.time}
                </p>

                <p className="flex items-center gap-2">
                  <Calendar size={16} />
                  Mã vé: {item.id}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <span className="text-[#AA7D36] text-xl font-bold">
                  {item.total.toLocaleString()}đ
                </span>

                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                  {item.status}
                </span>
              </div>

              {/* Rating */}
              <div className="mt-6 bg-[#202020] border border-[#2d2d2d] rounded-2xl p-5">
                <p className="font-semibold mb-4">Đánh giá phim</p>

                {/* Star */}
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() =>
                        !item.reviewed && handleRating(item.id, star)
                      }
                      disabled={item.reviewed}
                      className="hover:scale-110 transition"
                    >
                      <Star
                        size={28}
                        className={
                          star <= item.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-500"
                        }
                      />
                    </button>
                  ))}
                </div>

                {/* Comment */}
                <textarea
                  rows={4}
                  disabled={item.reviewed}
                  value={item.comment || ""}
                  onChange={(e) => handleComment(item.id, e.target.value)}
                  placeholder="Chia sẻ cảm nhận của bạn về bộ phim..."
                  className="
      w-full
      rounded-xl
      bg-[#151515]
      border
      border-[#333]
      p-4
      resize-none
      outline-none
      focus:border-[#AA7D36]
      disabled:opacity-60
    "
                />

                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {(item.comment || "").length}/300 ký tự
                  </span>

                  {item.reviewed ? (
                    <span className="px-4 py-2 rounded-xl bg-green-500/20 text-green-400 font-medium">
                      ✓ Đã đánh giá
                    </span>
                  ) : (
                    <button
                      onClick={() => handleSubmitReview(item.id)}
                      className="px-5 py-2 rounded-xl bg-[#AA7D36] hover:bg-[#8d672f] transition font-semibold"
                    >
                      Gửi đánh giá
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="flex flex-col justify-between">
              <button
                onClick={() => setSelectedTicket(item)}
                className="px-5 py-3 rounded-xl bg-[#AA7D36] hover:bg-[#8d672f]"
              >
                Xem chi tiết vé
              </button>

              <button className="mt-3 px-5 py-3 rounded-xl border border-[#AA7D36] text-[#AA7D36] hover:bg-[#AA7D36] hover:text-white transition">
                Đặt lại
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
