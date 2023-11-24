import * as React from "react";
import * as styles from "./DownloadCard.module.css";
import { Heading3, Link } from "@utrecht/component-library-react/dist/css-module";
import clsx from "clsx";
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
import _ from "lodash";

interface DownloadCardProps {
  label: string;
  size: string;
  type: string;
  icon?: JSX.Element;
  layoutClassName?: string;
  handleClick: (e?: any) => any;
}

export const DownloadCard = ({
  icon,
  label,
  size,
  type,
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
      <div className={styles.content}>
        <div className={styles.icon}>{icon ?? <FontAwesomeIcon icon={getIconFromType(type)} />}</div>

        <Heading3 className={styles.title}>{label}</Heading3>

        <div>
          ({_.toUpper(type)}
          {size && `, ${size} kb`})
        </div>
      </div>

      <Link className={styles.link} href="" onClick={(e) => onClick(e)}>
        <FontAwesomeIcon className={styles.icon} icon={faDownload} /> Download
      </Link>
    </div>
  );
};
