import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";

export const MovieDesctioption = () => {
  return (
    <div className="w-full md:w-101 flex flex-col gap-4">
      <div>
        <h3>Now Playing:</h3>
        <h1>Movie Name</h1>
      </div>

      <div className="flex items-center gap-2">
        <Star fill="yellow" stroke="yellow" />
        <p>
          6.9<span className="text-muted-foreground">/10</span>{" "}
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam commodi
        quaerat sapiente illo debitis eligendi enim inventore sunt quas
        exercitationem.
      </p>
      <Button variant="default" className="w-1/3">
        <Play />
        Watch Trailer
      </Button>
    </div>
  );
};
