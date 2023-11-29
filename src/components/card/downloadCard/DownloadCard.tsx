import * as React from "react";
import * as styles from "./DownloadCard.module.css";
import _ from "lodash";
import clsx from "clsx";
import { Heading3, Link } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faDownload,
  faFileAudio,
  faFileCsv,
  faFileImage,
  faFilePdf,
  faFileVideo,
  faFileWord,
  faFileZipper,
} from "@fortawesome/free-solid-svg-icons";

interface DownloadCardProps {
  label: string;
  size: string;
  type: string;
  labelTooltip?: {
    id: string;
    tooltip: string;
  };
  icon?: JSX.Element;
  layoutClassName?: string;
  handleClick: () => any;
}

export const DownloadCard = ({
  icon,
  label,
  size,
  type,
  labelTooltip,
  layoutClassName,
  handleClick,
}: DownloadCardProps): JSX.Element => {
  const onClick = (e: any) => {
    e.preventDefault();
    handleClick();
  };

  const getIconFromType = (type: any) => {
    switch (_.toUpper(type)) {
      case "PDF":
        return faFilePdf;
      case "DOC":
      case "DOCX":
      case "RTF":
      case "TXT":
        return faFileWord;
      case "CSV":
        return faFileCsv;
      case "JPG":
      case "PNG":
      case "SVG":
      case "GIF":
        return faFileImage;
      case "MP3":
      case "WAV":
        return faFileAudio;
      case "MP4":
      case "AVI":
      case "MPG":
      case "MPEG":
      case "MOV":
        return faFileVideo;
      case "7Z":
      case "ZIP":
      case "RAR":
        return faFileZipper;
      default:
        return faDatabase;
    }
  };

  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      <div className={styles.icon}>{icon ?? <FontAwesomeIcon icon={getIconFromType(type)} />}</div>
      <div className={styles.content}>
        <div className={styles.icon}>{icon ?? <FontAwesomeIcon icon={getIconFromType(type)} />}</div>

        <Heading3
          data-tooltip-id={labelTooltip && labelTooltip.id}
          data-tooltip-content={labelTooltip && labelTooltip.tooltip}
          className={styles.title}
        >
          {label}
        </Heading3>

        <div>
          ({_.toUpper(type)}
          {size && `, ${size}kB`})
        </div>
      </div>

      <Link className={styles.link} href="" onClick={(e: any) => onClick(e)}>
        <FontAwesomeIcon className={styles.icon} icon={faDownload} /> Download
      </Link>
    </div>
  );
};
