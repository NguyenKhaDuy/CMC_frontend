import { MapPin } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl">
      <img
        src="https://i.pravatar.cc/150?img=12"
        className="w-24 h-24 rounded-full border-2 border-[#AA7D36] object-cover"
      />

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl font-bold">Nguyễn Văn A</h2>

        <p className="text-gray-400">user@gmail.com</p>

        <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-300">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            Bạc Liêu
          </span>

          <span className="px-3 py-1 rounded-full bg-[#AA7D36]/20 text-[#AA7D36] text-xs">
            VIP Member
          </span>
        </div>
      </div>

      <button className="px-5 py-2 rounded-lg bg-[#AA7D36]">Chỉnh sửa</button>
    </div>
  );
}
