import { useState } from "react";

export default function CinemaPage() {
  const cinemasData = {
    "Bạc Liêu": [
      {
        name: "CGV Vincom Bạc Liêu",
        address: "Vincom Plaza Bạc Liêu",
        movies: [
          {
            title: "Avengers: Endgame",
            showtimes: ["09:00", "13:00", "19:00"],
          },
          {
            title: "Spider-Man: No Way Home",
            showtimes: ["10:30", "15:00", "21:00"],
          },
        ],
      },
      {
        name: "Galaxy Bạc Liêu",
        address: "Trung tâm TP Bạc Liêu",
        movies: [
          {
            title: "Avatar 2",
            showtimes: ["10:00", "14:00", "20:00"],
          },
        ],
      },
    ],

    "Cần Thơ": [
      {
        name: "CGV Vincom Cần Thơ",
        address: "Vincom Xuân Khánh",
        movies: [
          {
            title: "Avengers: Endgame",
            showtimes: ["09:30", "13:00", "18:30"],
          },
        ],
      },
    ],
  };

  const provinces = Object.keys(cinemasData);

  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const [selectedCinema, setSelectedCinema] = useState(null);

  const cinemas = cinemasData[selectedProvince];

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      {/* ================= BANNER ================= */}
      <div className="relative h-[350px] bg-[url('https://picsum.photos/1600/600?cinema')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold">Hệ thống rạp chiếu phim</h1>
          <p className="text-gray-300 mt-3">Trải nghiệm điện ảnh đỉnh cao</p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* PROVINCE FILTER */}
        <div className="flex gap-3 flex-wrap mb-10">
          {provinces.map((p) => (
            <button
              key={p}
              onClick={() => {
                setSelectedProvince(p);
                setSelectedCinema(null);
              }}
              className={`px-5 py-2 rounded-xl transition ${
                selectedProvince === p
                  ? "bg-[#AA7D36]"
                  : "bg-[#1c1c1c] hover:bg-[#333]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* CINEMA GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {cinemas.map((cinema) => (
            <div
              key={cinema.name}
              className="bg-[#151515] border border-[#222] rounded-2xl p-6 hover:border-[#AA7D36] transition"
            >
              {/* CINEMA INFO */}
              <h2 className="text-xl font-bold">{cinema.name}</h2>
              <p className="text-gray-400 mt-1">{cinema.address}</p>

              {/* MOVIES */}
              <div className="mt-6 space-y-5">
                {cinema.movies.map((movie, idx) => (
                  <div key={idx} className="border-b border-[#2a2a2a] pb-4">
                    <h3 className="text-[#AA7D36] font-semibold">
                      {movie.title}
                    </h3>

                    {/* SHOWTIMES */}
                    <div className="flex flex-wrap gap-3 mt-3">
                      {movie.showtimes.map((time) => (
                        <button
                          key={time}
                          className="px-4 py-2 rounded-lg bg-[#1c1c1c] hover:bg-[#AA7D36] transition text-sm"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* ACTION */}
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => setSelectedCinema(cinema.name)}
                  className="text-sm text-[#AA7D36] hover:underline"
                >
                  Xem chi tiết
                </button>

                <button className="bg-[#AA7D36] hover:bg-[#8f6424] px-5 py-2 rounded-xl text-sm font-semibold">
                  Đặt vé
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SELECTED CINEMA DETAIL */}
        {selectedCinema && (
          <div className="mt-10 p-6 bg-[#111] border border-[#333] rounded-2xl">
            <h3 className="text-2xl font-bold text-[#AA7D36]">
              {selectedCinema}
            </h3>
            <p className="text-gray-400 mt-2">
              Thông tin chi tiết rạp sẽ được hiển thị ở đây (map, tiện ích, ghế
              VIP, IMAX...)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
