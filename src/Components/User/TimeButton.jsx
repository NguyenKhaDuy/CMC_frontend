export default function TimeButton({
  time,
  selectedTime,
  selectedCinema,
  onSelect,
}) {
  const isDisabled = !selectedCinema;
  const isActive = selectedTime === time;

  return (
    <button
      disabled={isDisabled}
      onClick={() => onSelect(time)}
      className={`px-6 py-3 rounded-xl transition ${
        isDisabled
          ? "bg-gray-700 cursor-not-allowed opacity-60"
          : isActive
            ? "bg-[#AA7D36]"
            : "bg-[#1c1c1c] hover:bg-[#333]"
      }`}
    >
      {time}
    </button>
  );
}
