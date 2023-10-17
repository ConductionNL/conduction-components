import * as React from "react";
import * as styles from "./HorizontalOverflowWrapper.module.css";
import clsx from "clsx";

interface HorizontalOverflowWrapperProps {
  children: React.ReactNode;
}

export const HorizontalOverflowWrapper: React.FC<HorizontalOverflowWrapperProps> = ({ children }) => {
  const [canScrollRight, setCanScrollRight] = React.useState<boolean>(false);
  const [canScrollLeft, setCanScrollLeft] = React.useState<boolean>(false);

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const scrollRight = (): void => {
    wrapperRef.current?.scrollTo({
      left: wrapperRef.current.scrollWidth,
      behavior: "smooth",
    });
  };

  const scrollLeft = (): void => {
    wrapperRef.current?.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    checkScrollDirections(); // initiate available scroll directions

    window.addEventListener("resize", checkScrollDirections);

    return () => window.removeEventListener("resize", checkScrollDirections);
  }, []);

  const checkScrollDirections = (): void => {
    if (!wrapperRef.current) return;

    setCanScrollRight(wrapperRef.current.scrollLeft + wrapperRef.current.clientWidth < wrapperRef.current.scrollWidth);
    setCanScrollLeft(wrapperRef.current.scrollLeft > 0);
  };

  return (
    <div className={styles.container}>
      <div ref={wrapperRef} className={styles.wrapper} onScroll={checkScrollDirections}>
        {children}
      </div>

      {canScrollLeft && (
        <button className={clsx(styles.scrollButton, styles.left)} onClick={scrollLeft}>
          Scroll left
        </button>
      )}

      {canScrollRight && (
        <button className={clsx(styles.scrollButton, styles.right)} onClick={scrollRight}>
          Scroll right
        </button>
      )}
    </div>
  );
};
