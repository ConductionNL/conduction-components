import * as React from "react";
import * as styles from "./QuoteWrapper.module.css";

interface QuoteWrapperProps {
  borderColor?: string;
  borderWidth?: string;
}

export const QuoteWrapper: React.FC<QuoteWrapperProps> = ({ children, borderColor, borderWidth }) => {
  return (
    <div style={{ borderLeftColor: borderColor, borderLeftWidth: borderWidth }} className={styles.container}>
      {children}
    </div>
  );
};
