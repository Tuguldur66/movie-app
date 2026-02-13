"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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

  console.log("Now", movies);

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
    <div className="relative">
      <Carousel
        setApi={setApi}
        className="w-full h-63 md:h-150 border border-red-500 bg-muted-foreground"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <CarouselItem>
                {/* <img
                  className="h-63 w-full md:w-360 md:h-150"
                  src="https://images.unsplash.com/photo-1761850648640-2ee5870ee883?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                /> */}
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="md:absolute md:top-1/2 md:left-1/6 p-5">
        <MovieDesctioption />
      </div>
    </div>
  );
};
