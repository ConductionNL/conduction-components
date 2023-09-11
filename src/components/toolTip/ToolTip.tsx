import * as React from "react";
import * as styles from "./ToolTip.module.css";
import { Tooltip } from "react-tooltip";

interface ToolTipProps {
  id: string;
}

/**
 * This ToolTip should only be implemented once, after implementing it can be used in any element, like so:
 * <AnyElement data-tooltip-id="id-that-was-passed-to-ToolTip" data-tooltip-content="Hello world!" />
 */

export const ToolTip: React.FC<ToolTipProps> = ({ id }) => {
  return <Tooltip className={styles.tooltip} {...{ id }} />;
};
