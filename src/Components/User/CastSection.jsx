import { Users } from "lucide-react";

export default function CastSection({ casts }) {
  return (
    <section className="mt-12">
      <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
        <Users className="text-[#AA7D36]" />
        Diễn viên
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {casts.map((actor) => (
          <div
            key={actor.id}
            className="bg-[#171717] rounded-2xl overflow-hidden border border-[#2a2a2a] hover:border-[#AA7D36] transition"
          >
            <img
              src={actor.avatar}
              alt={actor.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-sm">{actor.name}</h3>

              <p className="text-xs text-gray-400 mt-1">{actor.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
