import { MovieCard } from "./MovieCard";
import { getUpComingMovies } from "@/utils/getData";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const UpComingMovies = async () => {
  const { results } = await getUpComingMovies(undefined);
  const firstTenMovies = results.slice(0, 10);

  return (
    <div>
      <div className="text-[24px] p-6 flex justify-between">
        <h1>Upcoming</h1>
        <Link href="/upComing">
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
