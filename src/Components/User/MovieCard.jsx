import { useNavigate } from "react-router-dom";

export default function MovieCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${item.id}`)}
      className="cursor-pointer group rounded-2xl overflow-hidden bg-[#151515] border border-[#AA7D36]/20 hover:border-[#AA7D36] transition"
    >
      <div className="overflow-hidden">
        <img
          src={`https://picsum.photos/300/420?random=${item.id}`}
          className="w-full h-[420px] object-cover group-hover:scale-110 duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">Avengers</h3>

        <p className="text-gray-400 mt-2">Hành động • 120 phút</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/booking/${item.id}`);
          }}
          className="mt-6 w-full bg-[#AA7D36] hover:bg-[#8f6424] rounded-xl py-3 font-semibold transition"
        >
          Đặt vé
        </button>
      </div>
    </div>
  );
}
