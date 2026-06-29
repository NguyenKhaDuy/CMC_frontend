import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieHeader from "../../Components/User/MovieHeader";
import CinemaSelector from "../../Components/User/CinemaSelector";
import SeatSelector from "../../Components/User/SeatSelector";
import Summary from "../../Components/User/Summary";
import TimeSelector from "../../Components/User/TimeSelector";
import FoodSelector from "../../Components/User/FoodSelector";

/* ===================== DATA ===================== */

const cinemaByProvince = [
  {
    province: "Bạc Liêu",
    cinemas: [
      {
        name: "CGV Vincom Bạc Liêu",
        movies: [
          {
            title: "Avengers: Endgame",
            schedule: {
              "2026-06-28": ["09:00", "13:00", "19:00"],
              "2026-06-29": ["10:00", "16:00"],
            },
          },
          {
            title: "Spider-Man: No Way Home",
            schedule: {
              "2026-06-28": ["11:00", "15:00", "21:00"],
            },
          },
        ],
      },
      {
        name: "Galaxy Bạc Liêu",
        movies: [
          {
            title: "Avatar 2",
            schedule: {
              "2026-06-28": ["10:00", "14:00", "20:00"],
              "2026-06-29": ["12:00", "18:00"],
            },
          },
        ],
      },
    ],
  },

  {
    province: "Cần Thơ",
    cinemas: [
      {
        name: "CGV Vincom Cần Thơ",
        movies: [
          {
            title: "Avengers: Endgame",
            schedule: {
              "2026-06-28": ["09:30", "13:00", "18:30"],
            },
          },
        ],
      },
      {
        name: "Lotte Cần Thơ",
        movies: [
          {
            title: "John Wick 4",
            schedule: {
              "2026-06-28": ["11:00", "15:30", "21:00"],
            },
          },
        ],
      },
    ],
  },
];

const foods = [
  {
    id: 1,
    name: "Bắp rang caramel",
    price: 50000,
    image: "https://images.unsplash.com/photo-1585238342028-4a1f5c5b8b2e",
  },
  {
    id: 2,
    name: "Bắp phô mai",
    price: 55000,
    image: "https://images.unsplash.com/photo-1585238342028-4a1f5c5b8b2e",
  },
  {
    id: 3,
    name: "Coca Cola",
    price: 25000,
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7",
  },
  {
    id: 4,
    name: "Pepsi",
    price: 25000,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
  },
];

const vouchers = {
  CGV50: 50000,
  SALE30: 30000,
  WELCOME10: 10000,
};

/* ===================== DATE ===================== */

const getNext7Days = () => {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

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
};


/* ===================== COMPONENT ===================== */

export default function BookingPage() {
  const { id } = useParams();

  const [selectedProvince, setSelectedProvince] = useState(
    cinemaByProvince[0].province,
  );

  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);

  const [openProvince, setOpenProvince] = useState(null);

  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyVoucher = () => {
    const value = vouchers[voucher];

    if (value) {
      setDiscount(value);
      alert("Áp dụng voucher thành công!");
    } else {
      setDiscount(0);
      alert("Voucher không hợp lệ!");
    }
  };

  const dates = getNext7Days();

  /* ===================== GET DATA ===================== */

  const provinceData = cinemaByProvince.find(
    (p) => p.province === selectedProvince,
  );

  const cinemaData = provinceData?.cinemas.find(
    (c) => c.name === selectedCinema,
  );

  const movies = cinemaData?.movies || [];

  const foodTotal = selectedFoods.reduce((sum, f) => sum + f.price, 0);
  const seatTotal = selectedSeats.length * 50000;
  const total = seatTotal + foodTotal - discount;

  const times =
    cinemaData?.movies?.find((m) => m.title === selectedMovie)?.schedule?.[
      selectedDate
    ] || [];

  /* ===================== RESET LOGIC ===================== */

  useEffect(() => {
    setSelectedMovie(null);
    setSelectedTime(null);
    setSelectedSeats([]);
  }, [selectedCinema]);

  useEffect(() => {
    setSelectedTime(null);
    setSelectedSeats([]);
  }, [selectedMovie, selectedDate]);

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen px-6 py-10">
      <MovieHeader id={id} />

      {/* ================= CINEMA ================= */}
      <CinemaSelector
        cinemaByProvince={cinemaByProvince}
        selectedCinema={selectedCinema}
        setSelectedCinema={setSelectedCinema}
        selectedProvince={selectedProvince}
        setSelectedProvince={setSelectedProvince}
        openProvince={openProvince}
        setOpenProvince={setOpenProvince}
      />

      {/* ================= MOVIE ================= */}
      {selectedCinema && (
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-xl font-bold mb-4">Chọn phim</h2>

          <div className="flex flex-wrap gap-3">
            {movies.map((movie) => (
              <button
                key={movie.title}
                onClick={() => setSelectedMovie(movie.title)}
                className={`px-4 py-2 rounded-xl transition ${
                  selectedMovie === movie.title
                    ? "bg-[#AA7D36]"
                    : "bg-[#1c1c1c] hover:bg-[#333]"
                }`}
              >
                {movie.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ================= DATE ================= */}
      {selectedMovie && (
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-xl font-bold mb-4">Chọn ngày</h2>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {dates.map((date) => (
              <button
                key={date.value}
                onClick={() => setSelectedDate(date.value)}
                className={`px-4 py-2 rounded-xl whitespace-nowrap transition ${
                  selectedDate === date.value
                    ? "bg-[#AA7D36]"
                    : "bg-[#1c1c1c] hover:bg-[#333]"
                }`}
              >
                {date.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ================= TIME ================= */}
      {selectedDate && (
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-xl font-bold mb-4">Chọn suất chiếu</h2>

          <TimeSelector
            times={times}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            selectedCinema={selectedCinema}
          />
        </div>
      )}

      {/* ================= SEAT ================= */}
      {selectedTime && (
        <>
          <SeatSelector
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />
          <FoodSelector
            foods={foods}
            selectedFoods={selectedFoods}
            setSelectedFoods={setSelectedFoods}
          />
        </>
      )}

      {/* ================= VOUCHER ================= */}
      <div className="max-w-6xl mx-auto mt-10 mb-6 p-6 bg-[#151515] rounded-2xl">
        <h2 className="text-xl font-bold mb-4">🎟️ Voucher giảm giá</h2>

        <div className="flex gap-3">
          <input
            value={voucher}
            onChange={(e) => setVoucher(e.target.value)}
            placeholder="Nhập mã voucher (VD: CGV50)"
            className="flex-1 px-4 py-3 rounded-xl bg-[#1c1c1c] outline-none"
          />

          <button
            onClick={applyVoucher}
            className="px-6 py-3 bg-[#AA7D36] rounded-xl font-bold hover:bg-[#8d672f]"
          >
            Áp dụng
          </button>
        </div>

        {discount > 0 && (
          <p className="text-green-400 mt-3">
            ✔ Giảm {discount.toLocaleString()} VND
          </p>
        )}
      </div>

      {/* ================= SUMMARY ================= */}
      <Summary
        selectedProvince={selectedProvince}
        selectedCinema={selectedCinema}
        selectedTime={selectedTime}
        selectedSeats={selectedSeats}
        selectedFoods={selectedFoods}
        discount={discount}
      />
    </div>
  );
}
