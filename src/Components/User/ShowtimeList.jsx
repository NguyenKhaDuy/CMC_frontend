export default function ShowtimeList({
  times,
  selectedCinema,
  selectedTime,
  setSelectedTime,
}) {
  return (
    <div className="flex flex-wrap gap-4">
      {times.map((time) => (
        <button
          key={time}
          disabled={!selectedCinema}
          onClick={() => setSelectedTime(time)}
          className={`px-6 py-3 rounded-xl transition ${
            !selectedCinema
              ? "bg-gray-700 cursor-not-allowed"
              : selectedTime === time
                ? "bg-[#AA7D36]"
                : "bg-[#1c1c1c] hover:bg-[#333]"
          }`}
        >
          {time}
        </button>
      ))}
    </div>
  );
}
