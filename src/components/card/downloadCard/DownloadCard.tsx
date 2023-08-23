import * as React from "react";
import * as styles from "./DownloadCard.module.css";
import { Link } from "@utrecht/component-library-react/dist/css-module";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

interface DownloadCardProps {
  icon: JSX.Element;
  label: string;
  sizeKb: string;
  downloadLabel: string;
  layoutClassName?: string;
  handleClick: () => any;
}

export const DownloadCard = ({
  icon,
  label,
  sizeKb,
  layoutClassName,
  downloadLabel,
  handleClick,
}: DownloadCardProps): JSX.Element => {
  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>

        <div>
          {label} ({sizeKb}kb)
        </div>
      </div>

      <Link onClick={handleClick}>
        <FontAwesomeIcon className={styles.icon} icon={faDownload} /> {downloadLabel}
      </Link>
    </div>
  );
};
