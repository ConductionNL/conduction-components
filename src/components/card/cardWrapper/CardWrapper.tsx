import * as React from "react";
import * as styles from "./CardWrapper.module.css";
import { HTMLAttributes } from "react";
import clsx from "clsx";

export const CardWrapper = (props: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {

  return (
    <div className={clsx(styles.container, props.className && props.className)} {...props}>
      {props.children}
    </div>
  );
};
