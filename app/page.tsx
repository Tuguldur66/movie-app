import { MovieCard } from "./_components/MovieCard";
import { MovieCarousel } from "./_components/MovieCarousel";
import { MovieDesctioption } from "./_components/MovieDescription";
import { MovieHeader } from "./_components/MovieHeader";
import { MovieList } from "./_components/MovieList";

const Home = () => {
  return (
    <div className="max-w-360">
      <MovieCarousel />

      <MovieList />
    </div>
  );
};

export default Home;
