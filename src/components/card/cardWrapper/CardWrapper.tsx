import * as React from "react";
import * as styles from "./CardWrapper.module.css";

export const CardWrapper = (props: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const _props = { ...props, className: `${props.className} ${styles.container}` };

  return <div {..._props}>{props.children}</div>;
};
