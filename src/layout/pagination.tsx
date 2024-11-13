import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React, { useMemo } from "react";
import ReactPaginate from "react-paginate";

type PaginationComponentProps = {
  isLoading?: boolean;
  count: number;
  offset: number;
  OnPageChange: (_page: number, _endOffset: number) => void;
  initialPage?: number;
};

const elementsPerPage = 15;

const PaginationComponent: React.FC<PaginationComponentProps> = (props) => {
  const { isLoading, count, offset, OnPageChange, initialPage } = props;

  const endOffset = offset + elementsPerPage;
  const pageCount = useMemo(() => Math.ceil(count / elementsPerPage), [count]);

  if (isLoading) {
    return <></>;
  }

  if (pageCount > 1) {
    return (
      <ReactPaginate
        className="flex justify-center mt-4 items-center space-x-1 text-primary/50"
        breakLabel="..."
        onPageChange={(ev) => OnPageChange(ev.selected, endOffset)}
        activeClassName="font-semibold text-primary"
        initialPage={initialPage}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        pageClassName="px-3 py-1 border border-white/30 rounded-md h-full"
        previousLabel={
          <div className="inline-flex items-center text-primary justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pl-2.5">
            <ChevronLeftIcon className="h-4 w-4" />
            <span>Poprzednia</span>
          </div>
        }
        nextLabel={
          <div className="inline-flex items-center text-primary justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pl-2.5">
            <span>Następna</span>
            <ChevronRightIcon className="h-4 w-4" />
          </div>
        }
        renderOnZeroPageCount={null}
      />
    );
  }

  return <></>;
};

export default PaginationComponent;
