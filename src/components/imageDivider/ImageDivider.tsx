import clsx from "clsx";
import * as React from "react";
import * as styles from "./imageDivider.module.css";

interface ImageDividerProps {
  image: string;
  layoutClassName: string;
}

export const ImageDivider = ({ image, layoutClassName }: ImageDividerProps): JSX.Element => {
  return <img src={image} className={clsx(styles.divider, layoutClassName)} />;
};
