export const getMoviesList = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_KEY}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const getNowPlayingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_KEY}`,
      },
    },
  );
  const data = await res.json();
  return data;
};
