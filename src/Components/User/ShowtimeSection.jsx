import ProvinceSelector from "./ProvinceSelector";
import CinemaList from "./CinemaList";
import ShowtimeList from "./ShowtimeList";

export default function ShowtimeSection({
  showtimesData,
  selectedProvince,
  setSelectedProvince,
  selectedCinema,
  setSelectedCinema,
  selectedTime,
  setSelectedTime,
}) {
  const provinces = Object.keys(showtimesData);
  const cinemas = Object.keys(showtimesData[selectedProvince] || {});
  const times = selectedCinema
    ? showtimesData[selectedProvince][selectedCinema]
    : [];

  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold mb-8">Lịch chiếu</h2>

      <ProvinceSelector
        provinces={provinces}
        selectedProvince={selectedProvince}
        setSelectedProvince={setSelectedProvince}
        setSelectedCinema={setSelectedCinema}
        setSelectedTime={setSelectedTime}
      />

      <CinemaList
        cinemas={cinemas}
        selectedCinema={selectedCinema}
        setSelectedCinema={setSelectedCinema}
        setSelectedTime={setSelectedTime}
      />

      <ShowtimeList
        times={times}
        selectedCinema={selectedCinema}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </section>
  );
}
