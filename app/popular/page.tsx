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
          {Number(page) !== 1 && (
            <PaginationItem>
              <PaginationPrevious href={`?page=${Number(page ?? 1) - 1}`} />
            </PaginationItem>
          )}
          {arr.map((pageNum) => {
            if (Number(page ?? 1) + 2 < pageNum) {
              return null;
            }
            if (Number(page ?? 1) > pageNum + 2) {
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

          {Number(page) !== total_pages && (
            <PaginationItem>
              <PaginationNext href={`?page=${Number(page ?? 1) + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PopularPage;
