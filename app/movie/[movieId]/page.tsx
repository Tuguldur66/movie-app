import { getMovieById } from "@/utils/getData";

import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};
console.log(getMovieById);

const MovieDetails = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);
  const { hour, min } = runTimeToHour(movie.runtime);

  return (
    <div className="w-full flex justify-center flex-col">
      <div className="w-270 flex-row flex justify-between m-auto">
        <div className="">
          <h1 className="text-[36px] font-bold">{movie.original_title}</h1>
          <p className="font-normal text-lg">
            {movie.release_date}·{hour + "h"} {min + "m"}
          </p>
        </div>
        <div>
          <div>
            <p className="text-xs font-medium">Rating</p>
          </div>
          <div className="flex flex-row">
            <div>
              <Star className="w-7 h-7 text-yellow-300 fill-yellow-300  " />
            </div>
            <div>
              <div className="flex align-middle ">
                <p className="font-semibold text-lg">
                  {movie.vote_average?.toFixed(2)}
                </p>
                /<p className="text-gray-400">10</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">{movie.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 m-auto">
        <img
          className="w-72.5 h-107"
          src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt={movie.title}
        />
        <img
          className="w-190 h-107"
          src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
          alt=""
        />
      </div>
      <div>
        <Badge></Badge>
      </div>
    </div>
  );
};
export default MovieDetails;

const runTimeToHour = (runtime: number) => {
  const hour = Math.floor(runtime / 60);
  const min = runtime % 60;
  return { hour, min };
};
