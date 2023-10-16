import * as React from "react";
import * as styles from "./HorizontalOverflowWrapper.module.css";
import clsx from "clsx";

interface HorizontalOverflowWrapperProps {
  children: React.ReactNode;
}

export const HorizontalOverflowWrapper: React.FC<HorizontalOverflowWrapperProps> = ({ children }) => {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    wrapperRef.current?.scrollTo({
      left: wrapperRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    wrapperRef.current?.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };

  const canScrollRight = () => {
    if (!wrapperRef.current) return;

    return wrapperRef.current.scrollWidth > wrapperRef.current.clientWidth;
  };

  const canScrollLeft = () => {
    if (!wrapperRef.current) return;

    return wrapperRef.current.scrollLeft > 0;
  };

  return (
    <div className={styles.container}>
      <div ref={wrapperRef} className={styles.wrapper}>
        {children}
      </div>

      {canScrollLeft() && (
        <button className={clsx(styles.scrollButton, styles.left)} onClick={scrollLeft}>
          Scroll left
        </button>
      )}

      {canScrollRight() && (
        <button className={clsx(styles.scrollButton, styles.right)} onClick={scrollRight}>
          Scroll right
        </button>
      )}
    </div>
  );
};
