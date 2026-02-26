import Link from "next/link";
import { MovieCard } from "./MovieCard";
import { getTopRatedMovies } from "@/utils/getData";
import { MoveRight } from "lucide-react";

export const TopRatedMovies = async () => {
  const { results } = await getTopRatedMovies(undefined);
  const firstTenMovies = results.slice(0, 10);
  return (
    <div>
      <div className="text-[24px] flex justify-between">
        <h1>Top rated</h1>
        <Link href="/topRated">
          see more <MoveRight />
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
