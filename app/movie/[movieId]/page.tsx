import { getMovieById } from "@/utils/getData";
type DetailsPageProps = {
  params: Promise<{ movieId: String }>;
};
const MovieDetails = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);
  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt=""
      />
    </div>
  );
};
export default MovieDetails;
