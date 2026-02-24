"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { getNowPlayingMovies } from "@/utils/getData";
import { Movie } from "@/utils/types";
import Image from "next/image";
import { MovieDesctioption } from "./MovieDescription";

export const MovieCarousel = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const res = await getNowPlayingMovies();
      setMovies(res.results);
      console.log("Now playing movies", res);
    };
    fetchNowPlaying();
  }, []);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi}>
        <CarouselContent className="w-full h-63 md:h-150 border border-red-500 bg-muted-foreground">
          {movies.map((movie) => {
            return (
              <CarouselItem key={movie.id} className="relative">
                <img
                  className="w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                />
                <div className="md:absolute md:top-1/2 md:left-1/6 p-5">
                  <MovieDesctioption movie={movie} />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
