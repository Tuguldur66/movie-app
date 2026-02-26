import { getMovieById } from "@/utils/getData";
import { log } from "console";
import { Star } from "lucide-react";
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
      <div className="w-270 flex-row flex justify-between">
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
            <div className="flex align-middle ">
              <p className="font-semibold text-lg">
                {movie.vote_average?.toFixed(2)}
              </p>
              /<p className="text-gray-400">10</p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-72.5 h-107"
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};
export default MovieDetails;

const runTimeToHour = (runtime: number) => {
  const hour = Math.floor(runtime / 60);
  const min = runtime % 60;
  return { hour, min };
};
