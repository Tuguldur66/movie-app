import React from "react";
import { Star } from "lucide-react";

export const MovieCard = () => {
  return (
    <div className="w-full h-fit bg-gray-100 rounded-lg">
      <div className="w-full h-90 bg-green-400 rounded-t-lg">
        {" "}
        {/* <img src="pics.svg" alt="" /> */}
      </div>
      <div className="p-8px w-53.25 h-5.75 flex gap-1.25x p-2 ">
        <Star className="w-4 h4 text-yellow-300 " /> 6.9/10
      </div>
      <div className="w-53.25 h-14 p-2 text-lg">Dear Santa</div>
    </div>
  );
};
