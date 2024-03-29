import * as React from "react";
import * as styles from "./InfoCard.module.css";
import clsx from "clsx";

interface InfoCardProps {
  title: string;
  content: JSX.Element | string;
  layoutClassName?: string;
}

export const InfoCard = ({ title, content, layoutClassName }: InfoCardProps): JSX.Element => {
  return (
    <div className={clsx([layoutClassName && layoutClassName], styles.container)}>
      <span className={styles.title}>{title}</span>

      <div className={styles.content}>{content}</div>
    </div>
  );
};
