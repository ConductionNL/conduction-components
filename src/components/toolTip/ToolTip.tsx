import * as React from "react";
import * as styles from "./ToolTip.module.css";
import { Tooltip } from "react-tooltip";
import clsx from "clsx";

interface ToolTipProps {
  id: string;
  layoutClassName?: string;
}

/**
 * Implement this ToolTip only once, in a high-level wrapper.
 * Use the ToolTip anywhere, in any element, by setting the following data props:
 *
 * data-tooltip-id="this-is-the-id-set-in-ToolTipProps"
 * data-tooltip-content="Hello world!"
 */

export const ToolTip: React.FC<ToolTipProps> = ({ id, layoutClassName }) => {
  return <Tooltip className={clsx(styles.tooltip, layoutClassName, layoutClassName)} {...{ id }} />;
};
