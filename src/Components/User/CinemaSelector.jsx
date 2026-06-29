export default function CinemaSelector({
  cinemaByProvince,
  selectedCinema,
  setSelectedCinema,
  selectedProvince,
  setSelectedProvince,
  openProvince,
  setOpenProvince,
}) {
  return (
    <div className="max-w-6xl mx-auto mb-10">
      <h2 className="text-xl font-bold mb-4">Chọn rạp chiếu</h2>

      <div className="space-y-4">
        {cinemaByProvince.map((group) => {
          const isOpen = openProvince === group.province;

          return (
            <div
              key={group.province}
              className="bg-[#151515] rounded-xl overflow-hidden"
            >
              {/* PROVINCE HEADER */}
              <button
                onClick={() => setOpenProvince(isOpen ? null : group.province)}
                className={`w-full flex justify-between px-4 py-3 font-bold transition ${
                  selectedProvince === group.province
                    ? "bg-[#AA7D36]"
                    : "bg-[#1c1c1c] hover:bg-[#333]"
                }`}
              >
                {group.province}
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              {/* CINEMAS LIST */}
              <div
                className={`transition-all ${
                  isOpen ? "p-4" : "max-h-0 overflow-hidden"
                }`}
              >
                <div className="flex flex-col gap-2">
                  {group.cinemas.map((cinema) => (
                    <button
                      key={cinema.name} // ✅ FIX
                      onClick={() => {
                        setSelectedProvince(group.province);
                        setSelectedCinema(cinema.name);
                      }}
                      className={`text-left px-3 py-2 rounded-lg text-sm transition ${
                        selectedCinema === cinema.name
                          ? "bg-[#AA7D36]"
                          : "bg-[#1c1c1c] hover:bg-[#333]"
                      }`}
                    >
                      {cinema.name} {/* ✅ FIX */}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
