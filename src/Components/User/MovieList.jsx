import MovieCard from "./ShowtimeMovieCard";

export default function MovieList({ movies, cinema, date, showtimes }) {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {movies.map((m) => (
        <MovieCard
          key={m.id}
          movie={m}
          cinema={cinema}
          date={date}
          showtimes={showtimes}
        />
      ))}
    </div>
  );
}
