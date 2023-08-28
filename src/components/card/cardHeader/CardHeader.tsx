import * as React from "react";
import * as styles from "./CardHeader.module.css";

export const CardHeader = (props: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const _props = { ...props, className: `${props.className} ${styles.container}` };

  return <div {..._props}>{props.children}</div>;
};

export const CardHeaderTitle = (props: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const _props = { ...props, className: `${props.className} ${styles.title}` };

  return <div {..._props}>{props.children}</div>;
};

export const CardHeaderDate = (props: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const _props = { ...props, className: `${props.className} ${styles.date}` };

  return <div {..._props}>{props.children}</div>;
};
