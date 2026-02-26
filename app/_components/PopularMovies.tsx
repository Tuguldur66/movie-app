import Link from "next/link";
import { MovieCard } from "./MovieCard";
import { getPopularMovies } from "@/utils/getData";
import { MoveRight } from "lucide-react";

export const PopularMovies = async () => {
  const { results } = await getPopularMovies(undefined);
  const firstTenMovies = results.slice(0, 10);
  return (
    <div>
      <div className="text-[24px] p-6 md:px-0 flex justify-between">
        <h1>Popular</h1>
        <Link href="/popular" className="flex flex-row gap-3 items-center">
          see more <MoveRight className="text-2xl" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 md:p-0">
        {firstTenMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
