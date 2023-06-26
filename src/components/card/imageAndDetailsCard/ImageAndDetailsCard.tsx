import * as React from "react";
import * as styles from "./ImageAndDetailsCard.module.css";
import clsx from "clsx";
import { Link } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ImageAndDetailsCardProps {
  title: string;
  image: JSX.Element;
  introduction: string;
  link: {
    href: string;
    label: string;
  };
  subHeader?: string;
  layoutClassName?: string;
}

export const ImageAndDetailsCard = ({
  image,
  title,
  subHeader,
  introduction,
  link,
  layoutClassName,
}: ImageAndDetailsCardProps): JSX.Element => {
  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])} onClick={() => navigate(link.href)}>
      <div className={styles.image}>{image}</div>

      <div className={styles.content}>
        <div>
          <div className={styles.title}>{title}</div>

          <span className={styles.subHeader}>{subHeader}</span>
        </div>

        <div className={styles.introduction}>{introduction}</div>

        <div className={styles.link}>
          <Link onClick={() => navigate(link.href)}>
            <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /> {link.label}
          </Link>
        </div>
      </div>
    </div>
  );
};
