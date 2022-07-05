import * as React from "react";
import * as styles from "./InfoCard.module.css";

interface InfoCardProps {
  title: string;
  content: JSX.Element | string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>

      <div className={styles.content}>{content}</div>
    </div>
  );
};
