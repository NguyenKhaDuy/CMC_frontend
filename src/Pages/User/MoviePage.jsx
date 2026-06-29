import SearchBar from "../../Components/User/SearchBar";
import CategoryFilter from "../../Components/User/CategoryFilter";
import MovieSection from "../../Components/User/MovieSection";
import { MdLocalMovies } from "react-icons/md";
import { FaFilm } from "react-icons/fa";

export default function MoviePage() {
  const movies = [
    {
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
      short_description: "Cuộc chiến cuối cùng của Avengers chống lại Thanos.",
      long_description:
        "Sau cú búng tay của Thanos, các Avengers còn sống phải quay ngược thời gian để cứu lấy toàn bộ vũ trụ.",

      casts: [
        {
          id: 1,
          name: "Robert Downey Jr.",
          role: "Iron Man",
          avatar:
            "https://image.tmdb.org/t/p/w300/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
        },
        {
          id: 2,
          name: "Chris Evans",
          role: "Captain America",
          avatar:
            "https://image.tmdb.org/t/p/w300/3bOGNsHlrswhyW79uvIHH1V43JI.jpg",
        },
      ],

      reviews: [
        {
          id: 1,
          user: "Nguyễn Văn A",
          avatar: "https://i.pravatar.cc/100?img=1",
          rating: 5,
          comment: "Phim quá hay.",
          date: "29/06/2026",
        },
      ],
    },

    {
      id_movie: 2,
      name_movie: "Spider-Man: No Way Home",
      director: "Jon Watts",
      duration: 148,
      release_date: "17/12/2021",
      language: "Tiếng Anh",
      rated: 13,
      production_country: "Hoa Kỳ",
      is_showing: true,
      trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
      small_image:
        "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      large_image:
        "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      short_description: "Spider-Man đối mặt với đa vũ trụ.",
      long_description:
        "Sau khi danh tính bị lộ, Peter Parker nhờ Doctor Strange giúp đỡ nhưng mọi chuyện vượt khỏi tầm kiểm soát.",

      casts: [
        {
          id: 1,
          name: "Tom Holland",
          role: "Peter Parker",
          avatar:
            "https://image.tmdb.org/t/p/w300/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
        },
        {
          id: 2,
          name: "Zendaya",
          role: "MJ",
          avatar:
            "https://image.tmdb.org/t/p/w300/9ykSLqj7mV06s3WzM1qL0bM3W8T.jpg",
        },
      ],

      reviews: [
        {
          id: 1,
          user: "Lê Văn B",
          avatar: "https://i.pravatar.cc/100?img=2",
          rating: 5,
          comment: "Quá nhiều fan service, rất đáng xem.",
          date: "28/06/2026",
        },
      ],
    },

    {
      id_movie: 3,
      name_movie: "The Batman",
      director: "Matt Reeves",
      duration: 176,
      release_date: "04/03/2022",
      language: "Tiếng Anh",
      rated: 16,
      production_country: "Hoa Kỳ",
      is_showing: false,
      trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
      small_image:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      large_image:
        "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      short_description: "Batman điều tra hàng loạt vụ án bí ẩn.",
      long_description:
        "Batman lần theo dấu vết của Riddler và khám phá những bí mật đen tối của Gotham.",

      casts: [
        {
          id: 1,
          name: "Robert Pattinson",
          role: "Batman",
          avatar:
            "https://image.tmdb.org/t/p/w300/8A4PS5iG7GWEAVFftyqMZKl3qcr.jpg",
        },
        {
          id: 2,
          name: "Zoë Kravitz",
          role: "Catwoman",
          avatar:
            "https://image.tmdb.org/t/p/w300/nL2r9Y8ZlH4RjHhTzNoKGdzRbM8.jpg",
        },
      ],

      reviews: [
        {
          id: 1,
          user: "Minh",
          avatar: "https://i.pravatar.cc/100?img=3",
          rating: 4,
          comment: "Không khí u tối rất cuốn hút.",
          date: "25/06/2026",
        },
      ],
    },

    {
      id_movie: 4,
      name_movie: "Doctor Strange in the Multiverse of Madness",
      director: "Sam Raimi",
      duration: 126,
      release_date: "06/05/2022",
      language: "Tiếng Anh",
      rated: 13,
      production_country: "Hoa Kỳ",
      is_showing: false,
      trailer: "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
      small_image:
        "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
      large_image:
        "https://image.tmdb.org/t/p/original/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
      short_description: "Doctor Strange khám phá đa vũ trụ.",
      long_description:
        "Stephen Strange đối đầu Scarlet Witch trong cuộc chiến xuyên đa vũ trụ.",

      casts: [
        {
          id: 1,
          name: "Benedict Cumberbatch",
          role: "Doctor Strange",
          avatar:
            "https://image.tmdb.org/t/p/w300/fBEucxECxGLKVHBznO0qHtCGiMO.jpg",
        },
        {
          id: 2,
          name: "Elizabeth Olsen",
          role: "Scarlet Witch",
          avatar:
            "https://image.tmdb.org/t/p/w300/wIU675y4dofIDVuhaNWPizJNtep.jpg",
        },
      ],

      reviews: [
        {
          id: 1,
          user: "Thanh",
          avatar: "https://i.pravatar.cc/100?img=4",
          rating: 4,
          comment: "Hình ảnh đẹp và rất sáng tạo.",
          date: "22/06/2026",
        },
      ],
    },
  ];

  const nowShowing = movies.filter((movie) => movie.is_showing);

  const comingSoon = movies.filter((movie) => !movie.is_showing);

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="mt-12">
          <SearchBar />
        </div>

        <div className="mt-8">
          <CategoryFilter />
        </div>

        <MovieSection
          title="Phim đang chiếu"
          icon={<MdLocalMovies size={28} className="text-[#AA7D36]" />}
          movies={nowShowing}
        />

        <MovieSection
          title="Phim sắp chiếu"
          icon={<FaFilm size={28} className="text-[#AA7D36]" />}
          movies={comingSoon}
        />
      </div>
    </div>
  );
}
