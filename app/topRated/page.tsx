import { getTopRatedMovies } from "@/utils/getData";
import { MovieCard } from "../_components/MovieCard";

export const TopRatedMovies = async () => {
  const { results } = await getTopRatedMovies();
  return (
    <div>
      <div className="text-[24px] p-6">
        <h1>Top rated</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 md:py-6 md:px-20">
        {results.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
export default TopRatedMovies;
