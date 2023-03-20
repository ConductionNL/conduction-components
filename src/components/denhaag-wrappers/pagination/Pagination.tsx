import clsx from "clsx";
import * as React from "react";
import "./Pagination.css";

interface PaginationProps {
  pages: number;
  currentPage: number;
  setPage: (page: number) => any;
}

export const Pagination = ({ pages, currentPage, setPage }: PaginationProps): JSX.Element => {
  return (
    <nav className="denhaag-pagination">
      <PreviousButton previousPage={currentPage > 1 ? currentPage - 1 : undefined} {...{ setPage }} />

      <span className="denhaag-pagination__links" role="group">
        {Array.from({ length: pages }, (_, i) => i + 1).map((page, idx) => (
          <Link key={idx} {...{ page }} current={page === currentPage} {...{ setPage }} />
        ))}
      </span>

      <NextButton nextPage={currentPage < pages ? currentPage + 1 : undefined} {...{ setPage }} />
    </nav>
  );
};

interface LinkProps {
  page: number;
  setPage: (page: number) => any;
  current?: boolean;
}

const Link = ({ page, current, setPage }: LinkProps): JSX.Element => {
  return (
    <a
      aria-current={current && "page"}
      aria-label={`Page ${page}`}
      className={clsx("denhaag-pagination__link", current && "denhaag-pagination__link--current")}
      onClick={() => setPage(page)}
    >
      {page}
    </a>
  );
};

interface PreviousButtonProps {
  setPage: (page: number) => any;
  previousPage?: number;
}

const PreviousButton = ({ previousPage, setPage }: PreviousButtonProps): JSX.Element => {
  return (
    <a
      aria-label="Previous page"
      className={clsx(
        "denhaag-pagination__link denhaag-pagination__link--arrow",
        !previousPage && "denhaag-pagination__link--disabled",
      )}
      onClick={() => previousPage && setPage(previousPage)}
      rel="prev"
    >
      <svg
        aria-hidden="true"
        className="denhaag-icon"
        fill="none"
        height="1em"
        viewBox="0 0 7 12"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.9921 10.8143C5.36382 11.1914 5.97222 11.1914 6.34393 10.8143C6.7079 10.4451 6.70822 9.8521 6.34466 9.48248L3.36315 6.45123C2.98039 6.06209 2.98039 5.43791 3.36315 5.04877L6.34466 2.01752C6.70822 1.6479 6.7079 1.05492 6.34394 0.685696C5.97222 0.308599 5.36382 0.308599 4.9921 0.685695L0.692003 5.04799C0.308224 5.43732 0.308224 6.06268 0.692003 6.45201L4.9921 10.8143Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
};

interface NextButtonProps {
  setPage: (page: number) => any;
  nextPage?: number;
}

const NextButton = ({ nextPage, setPage }: NextButtonProps): JSX.Element => {
  return (
    <a
      aria-label="Next page"
      className={clsx(
        "denhaag-pagination__link denhaag-pagination__link--arrow",
        !nextPage && "denhaag-pagination__link--disabled",
      )}
      onClick={() => nextPage && setPage(nextPage)}
      rel="next"
    >
      <svg
        aria-hidden="true"
        className="denhaag-icon"
        fill="none"
        height="1em"
        viewBox="0 0 7 12"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.0079 1.1857C1.63618 0.8086 1.02778 0.8086 0.656065 1.18569V1.18569C0.292103 1.55492 0.291779 2.1479 0.655339 2.51752L3.63685 5.54877C4.01961 5.93791 4.01961 6.56209 3.63686 6.95123L0.655339 9.98248C0.291779 10.3521 0.292102 10.9451 0.656065 11.3143V11.3143C1.02778 11.6914 1.63618 11.6914 2.0079 11.3143L6.308 6.95201C6.69178 6.56268 6.69178 5.93732 6.308 5.54799L2.0079 1.1857Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
};
