import * as React from "react";
import * as styles from "./DownloadCard.module.css";
import { DownloadIcon } from "@gemeente-denhaag/icons";
import { Link } from "@gemeente-denhaag/components-react";
import clsx from "clsx";

interface DownloadCardProps {
  icon: JSX.Element;
  label: string;
  sizeKb: string;
  downloadLabel: string;
  layoutClassName?: string;
}

export const DownloadCard: React.FC<DownloadCardProps> = ({ icon, label, sizeKb, layoutClassName, downloadLabel }) => {
  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>

        <div>
          {label} ({sizeKb}kb)
        </div>
      </div>

      <Link icon={<DownloadIcon />} iconAlign="start">
        {downloadLabel}
      </Link>
    </div>
  );
};
