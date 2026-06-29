export default function CinemaList({
  cinemas,
  selectedCinema,
  setSelectedCinema,
  setSelectedTime,
}) {
  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {cinemas.map((cinema) => (
        <button
          key={cinema}
          onClick={() => {
            setSelectedCinema(cinema);
            setSelectedTime(null);
          }}
          className={`px-5 py-2 rounded-xl transition ${
            selectedCinema === cinema ? "bg-[#AA7D36]" : "bg-[#1c1c1c]"
          }`}
        >
          {cinema}
        </button>
      ))}
    </div>
  );
}
