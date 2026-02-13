import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Film, Moon, Search } from "lucide-react";

export const MovieHeader = () => {
  return (
    <div className="w-full  flex items-center  justify-between py-3">
      <div className="flex items-center gap-2">
        <Film className="text-[#4338CA]" />{" "}
        <p className="text-[#4338CA] text-[16px] font-bold italic">Movie Z</p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline">
          <ChevronDown />
          Genre
        </Button>
        <div className="relative flex items-center">
          <Search className="text-muted-foreground size-4 absolute translate-x-1" />
          <Input placeholder="Search..." className="pl-6" />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Button size="icon" variant="outline">
          <Moon />
        </Button>
        <Button size="icon" variant="outline" className="visible md:hidden">
          <Search />
        </Button>
      </div>
    </div>
  );
};
