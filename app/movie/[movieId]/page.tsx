import { getMovieById } from "@/utils/getData";
import { getCredits } from "@/utils/getData";

import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { log } from "console";
type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};
console.log(getMovieById);

const MovieDetails = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;
  const credits = await getCredits(movieId);
  console.log(credits);

  const movie = await getMovieById(movieId);
  const { hour, min } = runTimeToHour(movie.runtime);

  return (
    <div className="flex justify-center flex-col">
      <div className="w-270 flex-row flex justify-between m-auto">
        <div className="">
          <h1 className="text-[36px] font-bold">{movie.title}</h1>
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
      <div className="w-270 m-auto">
        <div className="flex gap-2  mt-6">
          {movie.genres?.map((genre: { id: number; name: string }) => (
            <Badge
              key={genre.id}
              variant="outline"
              className="text-xs font-semibold"
            >
              {genre.name}
            </Badge>
          ))}
        </div>
        <div className="font-normal">
          <p className=" ">{movie.overview}</p>
        </div>
        {/* cast */}
        <div className="mt-6">
          <div className="flex flex-row gap-13.25 h-10.25 border-b-4">
            <p className="font-bold ">Director</p>
            {credits.crew
              ?.filter(
                (person: { id: number; name: string; job: string }) =>
                  person.job === "Director",
              )
              .map((director: { id: number; name: string }) => (
                <p key={director.id}>{director.name}</p>
              ))}
          </div>
          <div>
            <p className="font-semibold">Writer</p>
            {credits.crew
              ?.filter(
                (person: { id: number; name: string; job: string }) =>
                  person.job === "Novel",
              )
              .map((writer: { id: number; name: string }) => (
                <p key={writer.id}>{writer.name}</p>
              ))}
          </div>
          <div>
            <p className="font-semibold">stars</p>
            {credits.cast
              ?.filter(
                (actor: {
                  id: number;
                  name: string;
                  known_for_department: string;
                }) => actor.known_for_department === "Acting",
              )
              .slice(0, 3)
              .map((actor: { id: number; name: string }) => (
                <p key={actor.id}>{actor.name}</p>
              ))}
          </div>
        </div>
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
