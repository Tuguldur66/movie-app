"useclient";
import React, { useEffect, useState } from "react";
import { getNowPlayingMovies } from "@/utils/getData";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import { Movie } from "@/utils/types";

export const MovieDesctioption = ({ movie }: { movie: Movie }) => {
  return (
    <div className="w-full md:w-101 flex flex-col gap-4">
      <div>
        <h3 className="text-white">Now Playing:</h3>
        <h1 className="text-white">{movie.title}</h1>
      </div>

      <div className="flex items-center gap-2">
        <Star fill="yellow" stroke="yellow" />
        <p className="text-white">
          {movie.vote_average}
          <span className="text-muted-foreground">/10</span>{" "}
        </p>
      </div>
      <p className="text-white">{movie.overview}</p>
      <Button variant="default" className="w-1/3">
        <Play />
        Watch Trailer
      </Button>
    </div>
  );
};
