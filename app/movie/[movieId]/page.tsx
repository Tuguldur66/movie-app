import { getMovieById } from "@/utils/getData";
const MovieDetails = async ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;
  return <div>details: {movieId}</div>;
};

export default MovieDetails;
