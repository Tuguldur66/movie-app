import { PopularMovies } from "./PopularMovies";
import { TopRatedMovies } from "./TopRateMovies";
import { UpComingMovies } from "./UpComingMovies";
export const MovieList = () => {
  return (
    <div>
      <div>
        <UpComingMovies />
      </div>
      <div>
        <PopularMovies />
      </div>
      <div>
        <TopRatedMovies />
      </div>
    </div>
  );
};
