import * as React from "react";
import * as styles from "./Logo.module.css";
import clsx from "clsx";

interface LogoProps {
  variant?: "header" | "footer" | "navbar";
  onClick?: () => any;
  layoutClassName?: string;
  ariaLabel?: string;
}

export const Logo: React.FC<LogoProps> = ({ onClick, layoutClassName, variant = "header", ariaLabel = "logo" }) => {
  return (
    <div
      className={clsx(styles.container, styles[variant], [
        onClick && styles.clickable,
        layoutClassName && layoutClassName,
      ])}
      role="img"
      aria-label={ariaLabel}
      {...{ onClick }}
    />
  );
};
