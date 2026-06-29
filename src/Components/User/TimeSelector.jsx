import TimeButton from "./TimeButton";

export default function TimeSelector({
  times,
  selectedTime,
  selectedCinema,
  setSelectedTime,
}) {
  return (
    <div className="flex flex-wrap gap-4">
      {times.map((time) => (
        <TimeButton
          key={time}
          time={time}
          selectedTime={selectedTime}
          selectedCinema={selectedCinema}
          onSelect={setSelectedTime}
        />
      ))}
    </div>
  );
}
