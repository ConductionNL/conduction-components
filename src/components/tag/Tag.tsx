import * as React from "react";
import * as styles from "./Tag.module.css";

interface TagProps {
  tag: string;
  icon?: JSX.Element;
}

export const Tag: React.FC<TagProps> = ({ tag, icon }) => (
  <div className={styles.tag}>
    {icon && <span>{icon}</span>}
    <span>{tag}</span>
  </div>
);
