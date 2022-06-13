import * as React from "react";
import * as styles from "./DetailsCard.module.css";
import clsx from "clsx";
import { Link } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { Tag } from "../../tag/Tag";

interface DetailsCardProps {
  title: string;
  introduction: string;
  link: {
    href: string;
    label: string;
  };
  tags?: string[];
  subHeader?: string;
  layoutClassName?: string;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  title,
  subHeader,
  introduction,
  link,
  tags,
  layoutClassName,
}) => {
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
              <Tag key={idx} {...{ tag }} />
            ))}
          </div>
        )}

        <div className={styles.introduction}>{introduction}</div>

        <div className={styles.link}>
          <Link icon={<ArrowRightIcon />} iconAlign="start">
            {link.label}
          </Link>
        </div>
      </div>
    </div>
  );
};
