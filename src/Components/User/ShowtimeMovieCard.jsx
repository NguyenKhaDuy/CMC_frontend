import ShowtimeButtons from "./ShowtimeButtons";
import { MdLocalMovies } from "react-icons/md";

export default function ShowtimeMovieCard({ movie, cinema, date, showtimes }) {
  return (
    <div className="bg-[#151515] p-6 rounded-2xl flex gap-6">
      <div className="w-[120px] h-[160px] bg-gray-700 rounded-lg" />

      <div className="flex-1">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <MdLocalMovies className="text-[#AA7D36]" />
          {movie.title}
        </h2>

        <p className="text-gray-400 mb-4">{movie.duration}</p>

        <ShowtimeButtons cinema={cinema} date={date} showtimes={showtimes} />
      </div>
    </div>
  );
}
