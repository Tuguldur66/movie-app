import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 md:py-6 md:px-20">
      {Array.from({ length: 10 }).map((_, index) => {
        return <MovieCard />;
      })}
    </div>
  );
};
