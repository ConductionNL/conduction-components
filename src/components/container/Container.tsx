import * as React from "react";
import * as styles from "./Container.module.css";

export const Container = ({ children }: React.PropsWithChildren<{}>): JSX.Element => (
  <div className={styles.container}>{children}</div>
);
