import * as React from "react";
import * as styles from "./Tag.module.css";

interface TagProps {
  tag: string;
}

export const Tag: React.FC<TagProps> = ({ tag }) => <span className={styles.tag}>{tag}</span>;
