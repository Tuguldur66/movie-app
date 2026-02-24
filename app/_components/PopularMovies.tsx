import Link from "next/link";
import { MovieCard } from "./MovieCard";
import { getPopularMovies } from "@/utils/getData";

export const PopularMovies = async () => {
  const { results } = await getPopularMovies();
  const firstTenMovies = results.slice(0, 10);
  return (
    <div>
      <div className="text-[24px] p-6 md:px-0 flex justify-between">
        <h1>Popular</h1>
        <Link href="/popular">see more</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 md:p-0">
        {firstTenMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
