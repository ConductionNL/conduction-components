import * as React from "react";
import * as styles from "./Logo.module.css";
import clsx from "clsx";

interface LogoProps {
  variant?: "header" | "footer";
  onClick?: () => any;
  layoutClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ onClick, layoutClassName, variant = "header" }) => {
  return (
    <div
      className={clsx(styles.container, styles[variant], [
        onClick && styles.clickable,
        layoutClassName && layoutClassName,
      ])}
      {...{ onClick }}
    />
  );
};
