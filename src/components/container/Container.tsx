import * as React from "react";
import * as styles from "./Container.module.css";

export const Container = ({ children }: React.PropsWithChildren<{}>) => (
  <div className={styles.container}>{children}</div>
);
