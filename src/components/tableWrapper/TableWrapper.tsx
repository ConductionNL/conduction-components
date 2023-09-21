import React, { useState, useEffect } from "react";
import * as styles from "./TableWrapper.module.css";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface TableWrapperProps {
  touchScreen?: boolean;
}

export const TableWrapper: React.FC<{ children: React.ReactNode } & TableWrapperProps> = ({
  children,
  touchScreen,
}) => {
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (wrapperRef.current) {
      setCanScrollLeft(wrapperRef.current.scrollLeft > 0);
      setCanScrollRight(
        wrapperRef.current.scrollWidth - wrapperRef.current.scrollLeft > wrapperRef.current.clientWidth,
      );
    }
  };

  const handleScrollRight = () => {
    if (wrapperRef.current) wrapperRef.current.scrollTo({ left: wrapperRef.current.scrollWidth, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    if (wrapperRef.current) wrapperRef.current.scrollTo({ left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (wrapperRef.current) {
      setCanScrollRight(wrapperRef.current.scrollWidth > wrapperRef.current.clientWidth); // initiate scroll
    }
  }, []);

  return (
    <div className={styles.container}>
      <div
        onScroll={handleScroll}
        ref={wrapperRef}
        className={clsx(touchScreen ? styles.wrapperTouchscreen : styles.wrapper)}
      >
        {canScrollLeft && !touchScreen && (
          <div onClick={handleScrollLeft} className={styles.scrollLeftButton}>
            <div className={styles.scrollButton}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </div>
        )}
        {children}
        {canScrollRight && !touchScreen && (
          <div onClick={handleScrollRight} className={styles.scrollRightButton}>
            <div className={styles.scrollButton}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
