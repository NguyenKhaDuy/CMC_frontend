import { useState } from "react";
import MovieSection from "../../Components/User/MovieSection";

import MovieBanner from "../../Components/User/MovieBanner";
import MovieInfo from "../../Components/User/MovieInfo";
import TrailerSection from "../../Components/User/TrailerSection";
import ShowtimeSection from "../../Components/User/ShowtimeSection";
import MovieDescription from "../../Components/User/MovieDescription";
import CastSection from "../../Components/User/CastSection";
import ReviewSection from "../../Components/User/ReviewSection";

export default function MovieDetailPage() {
  const relatedMovies = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const showtimesData = {
    "Bạc Liêu": {
      "CGV Vincom Bạc Liêu": ["09:00", "12:30", "19:00"],
      "Galaxy Bạc Liêu": ["10:00", "14:00", "20:00"],
    },
    "Cần Thơ": {
      "CGV Vincom Cần Thơ": ["09:30", "13:00", "18:30"],
      "Lotte Cần Thơ": ["11:00", "15:30", "21:00"],
    },
  };

  const movie = {
    id_movie: 1,

    name_movie: "Avengers: Endgame",

    director: "Anthony Russo, Joe Russo",

    duration: 181,

    release_date: "26/04/2019",

    language: "Tiếng Anh",

    rated: 13,

    production_country: "Hoa Kỳ",

    is_showing: true,

    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",

    small_image:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",

    large_image:
      "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",

    short_description:
      "Cuộc chiến cuối cùng của các Avengers chống lại Thanos nhằm cứu lấy toàn bộ vũ trụ.",

    long_description: `
Sau khi Thanos thu thập đủ các Viên đá Vô cực, một nửa sự sống trong vũ trụ đã biến mất.

Những Avengers còn sống phải hợp sức để quay ngược thời gian, thu thập lại các Viên đá nhằm đảo ngược cú búng tay của Thanos.

Đây là chương cuối của Infinity Saga, nơi những siêu anh hùng mạnh nhất Trái Đất bước vào trận chiến quyết định số phận của toàn bộ nhân loại.

Bộ phim mang đến nhiều cảm xúc với những khoảnh khắc hài hước, xúc động và những màn chiến đấu hoành tráng nhất của Vũ trụ Điện ảnh Marvel.
`,

    casts: [
      {
        id: 1,
        name: "Robert Downey Jr.",
        role: "Tony Stark / Iron Man",
        avatar:
          "https://image.tmdb.org/t/p/w300/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
      },
      {
        id: 2,
        name: "Chris Evans",
        role: "Steve Rogers / Captain America",
        avatar:
          "https://image.tmdb.org/t/p/w300/3bOGNsHlrswhyW79uvIHH1V43JI.jpg",
      },
      {
        id: 3,
        name: "Scarlett Johansson",
        role: "Natasha Romanoff / Black Widow",
        avatar:
          "https://image.tmdb.org/t/p/w300/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
      },
      {
        id: 4,
        name: "Chris Hemsworth",
        role: "Thor",
        avatar:
          "https://image.tmdb.org/t/p/w300/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg",
      },
      {
        id: 5,
        name: "Mark Ruffalo",
        role: "Bruce Banner / Hulk",
        avatar:
          "https://image.tmdb.org/t/p/w300/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg",
      },
      {
        id: 6,
        name: "Jeremy Renner",
        role: "Clint Barton / Hawkeye",
        avatar:
          "https://image.tmdb.org/t/p/w300/yB84D1neTYXfD3GQ1Q3su7w2qgG.jpg",
      },
    ],

    reviews: [
      {
        id: 1,
        user: "Nguyễn Văn A",
        avatar: "https://i.pravatar.cc/100?img=1",
        rating: 5,
        comment:
          "Phim cực kỳ hay, cảm xúc từ đầu đến cuối. Đoạn kết quá tuyệt vời, xứng đáng là bom tấn của Marvel.",
        date: "29/06/2026",
      },
      {
        id: 2,
        user: "Trần Minh",
        avatar: "https://i.pravatar.cc/100?img=2",
        rating: 4,
        comment:
          "Kỹ xảo đẹp, cốt truyện hấp dẫn, nhiều phân cảnh rất cảm động.",
        date: "28/06/2026",
      },
      {
        id: 3,
        user: "Lê Hoàng",
        avatar: "https://i.pravatar.cc/100?img=3",
        rating: 5,
        comment:
          "Một trong những bộ phim siêu anh hùng hay nhất mình từng xem.",
        date: "27/06/2026",
      },
    ],
  };

  const provinces = Object.keys(showtimesData);

  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      <MovieBanner />

      <div className="max-w-7xl mx-auto px-5 -mt-64 relative z-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <MovieInfo />
        </div>

        <TrailerSection />

        <MovieDescription movie={movie} />

        <CastSection casts={movie.casts} />

        <ReviewSection reviews={movie.reviews} />

        <ShowtimeSection
          showtimesData={showtimesData}
          selectedProvince={selectedProvince}
          setSelectedProvince={setSelectedProvince}
          selectedCinema={selectedCinema}
          setSelectedCinema={setSelectedCinema}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        <MovieSection title="Phim liên quan" movies={relatedMovies} />
      </div>
    </div>
  );
}
