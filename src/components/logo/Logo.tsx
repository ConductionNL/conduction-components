import * as React from "react";
import * as styles from "./Logo.module.css";
import clsx from "clsx";

interface LogoProps {
  variant?: "header" | "footer" | "navbar";
  onClick?: () => any;
  layoutClassName?: string;
  altText?: string;
}

export const Logo: React.FC<LogoProps> = ({ onClick, layoutClassName, variant = "header", altText }) => {
  return (
    <div
      className={clsx(styles.container, styles[variant], [
        onClick && styles.clickable,
        layoutClassName && layoutClassName,
      ])}
      role="img"
      aria-label={altText || "Logo"}
      {...{ onClick }}
    />
  );
};
