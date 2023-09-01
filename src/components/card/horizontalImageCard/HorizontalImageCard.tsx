import * as React from "react";
import * as styles from "./HorizontalImageCard.module.css";
import clsx from "clsx";
import { Link } from "@utrecht/component-library-react";
import { navigate } from "gatsby";
import { ExternalLinkIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";

interface HorizontalImageCardProps {
  iconOrImage: JSX.Element;
  title: string;
  link: {
    label: string;
    href: string;
  };
  layoutClassName?: string;
  external?: boolean;
}

export const HorizontalImageCard = ({
  title,
  layoutClassName,
  external,
  link,
  iconOrImage,
}: HorizontalImageCardProps): JSX.Element => {
  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])} onClick={() => navigate(link.href)}>
      <div className={styles.imageOrIconContainer}>{iconOrImage}</div>
      <div className={styles.linkContainer}>
        <div className={styles.title}>{title}</div>
        <Link className={styles.link}>
          {external ? <ExternalLinkIcon /> : <ArrowRightIcon />}
          {link.label}
        </Link>
      </div>
    </div>
  );
};
