import * as React from "react";
import * as styles from "./CardWrapper.module.css";

export const CardWrapper = (props: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (props.onClick && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      props.onClick(event as any);
    }
  };

  const _props = {
    ...props,
    className: `${props.className} ${styles.container}`,
    role: props.onClick ? "button" : undefined,
    tabIndex: props.onClick ? 0 : undefined,
    ...(props.onClick && { onKeyDown: handleKeyDown }),
  };

  return <div {..._props}>{props.children}</div>;
};
