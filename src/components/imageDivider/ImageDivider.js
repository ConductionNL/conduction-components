import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import * as styles from "./imageDivider.module.css";
export const ImageDivider = ({ image, layoutClassName }) => {
    return _jsx("img", { src: image, className: clsx(styles.divider, layoutClassName) });
};
