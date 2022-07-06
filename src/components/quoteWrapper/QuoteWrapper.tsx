import * as React from "react";
import * as styles from "./QuoteWrapper.module.css";
import clsx from "clsx";

interface QuoteWrapperProps {
  color?: string;
  width?: string;
}

export const QuoteWrapper: React.FC<QuoteWrapperProps> = ({ children, color, width }) => {
  const borderStyle = document.getElementById("border");

  if (borderStyle) {
    if (color) {
      borderStyle.style.borderLeft = `6px solid ${color}`;
    }
    if (width) {
      borderStyle.style.borderLeft = `${width} solid #f5f5f5`;
    }
    if (width && color) {
      borderStyle.style.borderLeft = `${width} solid ${color}`;
    }
  }

  return (
    <div className={styles.content}>
      <div id="border" className={clsx(styles.virticalBorder, [width && borderStyle], [color && borderStyle])} />
      <div className={styles.container}>{children}</div>
    </div>
  );
};
