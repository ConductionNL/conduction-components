import * as React from "react";
import * as styles from "./CardWrapper.module.css";
import { HTMLAttributes } from "react";
import clsx from "clsx";

interface CardWrapperProps {
  children: React.ReactNode;
}

export const CardWrapper = ({
  children,
  onClick,
  id,
  className,
}: CardWrapperProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return (
    <div className={clsx(styles.container, className && className)} {...{ onClick, id }}>
      {children}
    </div>
  );
};
