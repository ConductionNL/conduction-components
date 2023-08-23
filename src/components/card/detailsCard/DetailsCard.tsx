import * as React from "react";
import * as styles from "./DetailsCard.module.css";
import { Link } from "@utrecht/component-library-react/dist/css-module";
import clsx from "clsx";
import { navigate } from "gatsby";
import { Tag } from "../../tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface DetailsCardProps {
  title: string;
  introduction?: string;
  link: {
    href: string;
    label: string;
  };
  tags?: string[];
  subHeader?: string;
  layoutClassName?: string;
}

export const DetailsCard = ({
  title,
  subHeader,
  introduction,
  link,
  tags,
  layoutClassName,
}: DetailsCardProps): JSX.Element => {
  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])} onClick={() => navigate(link.href)}>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>{title}</div>

          <span className={styles.subHeader}>{subHeader}</span>
        </div>

        {tags && (
          <div className={styles.tags}>
            {tags.map((tag, idx) => (
              <Tag key={idx} label={tag} />
            ))}
          </div>
        )}

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
