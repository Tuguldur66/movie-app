import { Star } from "lucide-react";
import { Movie } from "@/utils/types";

export const MovieCard = ({ title, vote_average, poster_path }: Movie) => {
  return (
    <div className="w-39.25 h-77.25 md:w-57.5 md:h-109.75  bg-gray-100 rounded-lg">
      <div className="w-full h-90 rounded-t-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </div>
      <div className="p-8px w-53.25 h-5.75 flex gap-1.25x p-2u ">
        <Star className="w-4 h4 text-yellow-300 " /> {vote_average?.toFixed(2)}
        /10
      </div>
      <div className="w-53.25 h-14 p-2 text-lg">{title}</div>
    </div>
  );
};
