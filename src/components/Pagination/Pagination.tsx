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
  layoutClassName?: string;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setCurrentPage, layoutClassName }) => {
  if (totalPages < 1) return <></>; // no pages available

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
      nextLabel={
        <Button className={styles.button}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      }
      previousLabel={
        <Button className={styles.button}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
      }
    />
  );
};
