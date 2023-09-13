import * as React from "react";
import * as styles from "./ToolTip.module.css";
import { Tooltip } from "react-tooltip";

interface ToolTipProps {
  id: string;
}

/**
 * Implement this ToolTip only once, in a high-level wrapper.
 * Use the ToolTip anywhere, in any element, by setting the following data props:
 *
 * data-tooltip-id="this-is-the-id-set-in-ToolTipProps"
 * data-tooltip-content="Hello world!"
 */

export const ToolTip: React.FC<ToolTipProps> = ({ id }) => {
  return <Tooltip className={styles.tooltip} {...{ id }} />;
};
