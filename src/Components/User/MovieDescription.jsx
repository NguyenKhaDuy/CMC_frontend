import {
  FileText,
  Film,
  Clock,
  CalendarDays,
  Globe,
  Languages,
  Star,
  User,
} from "lucide-react";

export default function MovieDescription({ movie }) {
  return (
    <section className="mt-12 bg-[#171717] rounded-3xl border border-[#2a2a2a] overflow-hidden">
      {/* Header */}
      <div className="px-8 py-6 border-b border-[#2a2a2a]">
        <h2 className="flex items-center gap-3 text-2xl font-bold">
          <FileText className="text-[#AA7D36]" />
          Thông tin phim
        </h2>

        <p className="text-gray-400 mt-2">{movie.short_description}</p>
      </div>

      {/* Thông tin */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
        <Info icon={<Film />} label="Tên phim" value={movie.name_movie} />

        <Info icon={<User />} label="Đạo diễn" value={movie.director} />

        <Info
          icon={<Clock />}
          label="Thời lượng"
          value={`${movie.duration} phút`}
        />

        <Info
          icon={<CalendarDays />}
          label="Khởi chiếu"
          value={movie.release_date}
        />

        <Info icon={<Languages />} label="Ngôn ngữ" value={movie.language} />

        <Info icon={<Star />} label="Độ tuổi" value={`T${movie.rated}+`} />

        <Info
          icon={<Globe />}
          label="Quốc gia"
          value={movie.production_country}
        />

        <Info
          icon={<Film />}
          label="Trạng thái"
          value={movie.is_showing ? "Đang chiếu" : "Sắp chiếu"}
          color={movie.is_showing ? "text-green-400" : "text-yellow-400"}
        />
      </div>

      {/* Nội dung */}
      <div className="border-t border-[#2a2a2a] p-8">
        <h3 className="text-xl font-bold mb-5">Nội dung phim</h3>

        <p className="text-gray-300 leading-8 whitespace-pre-line">
          {movie.long_description}
        </p>
      </div>
    </section>
  );
}

function Info({ icon, label, value, color }) {
  return (
    <div className="bg-[#202020] rounded-2xl p-5 border border-[#2d2d2d] hover:border-[#AA7D36] transition">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-xl bg-[#AA7D36]/10 flex items-center justify-center text-[#AA7D36]">
          {icon}
        </div>

        <span className="text-gray-400">{label}</span>
      </div>

      <p className={`font-semibold text-lg ${color || "text-white"}`}>
        {value}
      </p>
    </div>
  );
}
