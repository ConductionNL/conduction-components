import clsx from "clsx";
import _ from "lodash";
import * as React from "react";
import ReactTooltip from "react-tooltip";
import * as styles from "./ToolTip.module.css";

interface ToolTipProps {
  children: React.ReactNode;
  tooltip: string;
  layoutClassName?: string;
}

export const ToolTip: React.FC<ToolTipProps> = ({ children, layoutClassName, tooltip }) => {
  return (
    <div className={clsx(styles.wrapper, layoutClassName && layoutClassName)}>
      <div data-tip={tooltip}>{children}</div>

      <ReactTooltip place={"top"} type={"dark"} effect={"solid"} className={styles.tooltip} />
    </div>
  );
};

export { ReactTooltip };
