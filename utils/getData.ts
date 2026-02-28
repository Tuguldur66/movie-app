import { Credits, MovieDetails, MovieList } from "./types";

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

export const getNowPlayingMovies = async (): Promise<MovieList> => {
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

export const getUpComingMovies = async (
  page: string | undefined,
): Promise<MovieList> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
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

export const getPopularMovies = async (
  page: string | undefined,
): Promise<MovieList> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page ?? 1}`,
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

export const getTopRatedMovies = async (
  page: string | undefined,
): Promise<MovieList> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page ?? 1}`,
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

export const getMovieById = async (movieId: string): Promise<MovieDetails> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
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

export const getCredits = async (movieId: string): Promise<Credits> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
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
