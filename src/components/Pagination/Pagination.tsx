import * as React from "react";
import * as styles from "./Pagination.module.css";
import clsx from "clsx";

import ReactPaginate from "react-paginate";
import { Button } from "@utrecht/component-library-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  ariaLabels: {
    pagination: string;
    nextPage: string;
    previousPage: string;
    page: string;
  };
  layoutClassName?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
  ariaLabels,
  layoutClassName,
}) => {
  if (totalPages < 1) return <></>; // no pages available

  const setAttributes = (): void => {
    const setRoleToPresentation = (selector: string) => {
      document.querySelectorAll(selector).forEach((element) => {
        if (element.getAttribute("role") !== "list") element.setAttribute("role", "list");
      });
    };

    setRoleToPresentation('ul[role*="navigation"][class*="Pagination"][aria-label="Pagination"]');
  };

  React.useEffect(() => {
    setAttributes();
  }, []);

  React.useEffect(() => {
    const setRoleToPresentation = (selector: string) => {
      document.querySelectorAll(selector).forEach((element) => {
        if (element.getAttribute("aria-label") !== ariaLabels.pagination) {
          element.setAttribute("aria-label", ariaLabels.pagination);
        }
      });
    };

    setRoleToPresentation('ul[role*="list"][class*="Pagination"]');
  }, [ariaLabels.pagination]);

  return (
    <ReactPaginate
      className={clsx(styles.container, layoutClassName && layoutClassName)}
      disabledClassName={styles.disabled}
      activeClassName={styles.currentPage}
      onPageChange={(e: any) => setCurrentPage(e.selected + 1)}
      forcePage={currentPage - 1}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      disableInitialCallback
      marginPagesDisplayed={2}
      breakLabel="..."
      nextClassName={styles.next}
      previousClassName={styles.previous}
      nextAriaLabel={ariaLabels.nextPage}
      previousAriaLabel={ariaLabels.previousPage}
      ariaLabelBuilder={(currentPage) => `${ariaLabels.page} ${currentPage}`}
      nextLabel={
        <Button tabIndex={-1} className={styles.button}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      }
      previousLabel={
        <Button tabIndex={-1} className={styles.button}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
      }
    />
  );
};
