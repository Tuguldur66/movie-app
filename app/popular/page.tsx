import { getPopularMovies } from "@/utils/getData";
import { MovieCard } from "../_components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PopularPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { page } = await searchParams;

  const { results, total_pages } = await getPopularMovies(page);

  const arr = new Array(50).fill(0).map((_, index) => index + 1);

  return (
    <div>
      <div className="text-[24px] p-6">
        <h1>Popular</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 md:py-6 md:px-20">
        {results.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {arr.map((pageNum) => {
            if (Number(page) + 2 < pageNum) {
              return null;
            }
            if (Number(page) > pageNum + 2) {
              return null;
            }
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink href={`?page=${pageNum}`}>
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PopularPage;
