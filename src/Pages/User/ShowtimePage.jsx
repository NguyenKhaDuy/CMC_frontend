import { useState } from "react";
import ProvinceFilter from "../../Components/User/ProvinceFilter";
import CinemaFilter from "../../Components/User/CinemaFilter";
import DateFilter from "../../Components/User/DateFilter";
import MovieList from "../../Components/User/MovieList";

const cinemaByProvince = {
  "Bạc Liêu": ["CGV Vincom Bạc Liêu", "Galaxy Bạc Liêu"],
  "Cần Thơ": ["CGV Vincom Cần Thơ", "Lotte Cần Thơ", "BHD Ninh Kiều"],
  HCM: ["CGV Crescent Mall", "Lotte Q7", "Galaxy Tân Bình"],
};

const showtimes = {
  "CGV Vincom Bạc Liêu": {
    "2026-06-29": ["09:00", "12:30", "19:00"],
  },
};

const movies = [
  { id: 1, title: "Avengers: Endgame", duration: "181 phút" },
  { id: 2, title: "Avatar 3", duration: "160 phút" },
];

function getNext7Days() {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push({
      label: d.toLocaleDateString("vi-VN", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
      }),
      value: d.toISOString().split("T")[0],
    });
  }
  return days;
}

export default function ShowtimePage() {
  const [province, setProvince] = useState(null);
  const [cinema, setCinema] = useState(null);
  const [date, setDate] = useState(getNext7Days()[0].value);

  const days = getNext7Days();

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold">Lịch chiếu phim</h1>
      </div>

      <ProvinceFilter
        data={cinemaByProvince}
        province={province}
        setProvince={(p) => {
          setProvince(p);
          setCinema(null);
        }}
      />

      {province && (
        <CinemaFilter
          cinemas={cinemaByProvince[province]}
          cinema={cinema}
          setCinema={setCinema}
        />
      )}

      <DateFilter days={days} date={date} setDate={setDate} />

      <MovieList
        movies={movies}
        cinema={cinema}
        date={date}
        showtimes={showtimes}
      />
    </div>
  );
}
