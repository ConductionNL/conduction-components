import * as React from "react";
import * as styles from "./Tag.module.css";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface TagProps {
  label: string;
  icon?: JSX.Element;
  onClick?: () => any;
  remove?: () => any;
  layoutClassName?: string;
}

export const Tag = ({ label, icon, onClick, remove, layoutClassName }: TagProps): JSX.Element => (
  <div className={remove && styles.tagContainer}>
    <div
      className={clsx(
        styles.tag,
        [layoutClassName && layoutClassName],
        onClick && styles.clickable,
        remove && styles.remove,
      )}
      {...{ onClick }}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </div>
    {remove && (
      <div className={clsx(styles.tag, styles.removeTag)} onClick={remove}>
        <span>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
    )}
  </div>
);
