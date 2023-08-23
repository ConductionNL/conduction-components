import * as React from "react";
import * as styles from "./Container.module.css";
import clsx from "clsx";

interface ContainerProps {
  layoutClassName?: string;
}

export const Container = ({ children, layoutClassName }: React.PropsWithChildren<ContainerProps>): JSX.Element => (
  <div className={clsx(styles.container, [layoutClassName && layoutClassName])}>{children}</div>
);
