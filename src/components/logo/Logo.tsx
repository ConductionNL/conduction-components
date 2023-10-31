import * as React from "react";
import * as styles from "./Logo.module.css";
import clsx from "clsx";

interface LogoProps {
  size?: "md" | "lg";
  onClick?: () => any;
  layoutClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ onClick, layoutClassName, size = "md" }) => {
  return (
    <div
      className={clsx(styles.container, styles[size], [
        onClick && styles.clickable,
        layoutClassName && layoutClassName,
      ])}
      {...{ onClick }}
    />
  );
};
