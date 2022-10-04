import _ from "lodash";
import * as React from "react";
import ReactTooltip from "react-tooltip";
import * as styles from "./ToolTip.module.css";

interface ToolTipProps {
  children: React.ReactNode;
  layoutClassName?: string;
  tooltip: string;
}

export const ToolTip: React.FC<ToolTipProps> = ({ children, layoutClassName, tooltip }) => {
  return (
    <div className={styles.wrapper}>
      <div data-tip={tooltip} className={layoutClassName && layoutClassName}>
        {children}
      </div>

      <ReactTooltip place={"top"} type={"dark"} effect={"solid"} />
    </div>
  );
};

export { ReactTooltip };
