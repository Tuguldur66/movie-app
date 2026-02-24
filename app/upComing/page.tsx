import { MovieCard } from "../_components/MovieCard";
import { getUpComingMovies } from "@/utils/getData";

export const UpComingMovies = async () => {
  const { results } = await getUpComingMovies();

  return (
    <div>
      <div className="text-[24px] p-6 flex justify-between">
        <h1>Upcoming</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 md:py-6 md:px-20">
        {results.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
export default UpComingMovies;
