import { MovieCard } from "./MovieCard";
import { getUpComingMovies } from "@/utils/getData";

export const UpComingMovies = async () => {
  const { results } = await getUpComingMovies();
  const firstTenMovies = results.slice(0, 10);

  return (
    <div>
      <div className="text-[24px] p-6">
        <h1>Upcoming</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 md:py-6 md:px-20">
        {firstTenMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
