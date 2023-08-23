import { Divider } from "@gemeente-denhaag/divider";
import { Link } from "@gemeente-denhaag/link";
import { navigate } from "gatsby";
import * as React from "react";
import * as styles from "./RichContentCard.module.css";
import { ExternalLinkIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";
import { Tag } from "../../tag/Tag";

export interface RichContentCardProps {
  link: {
    label: string;
    href: string;
  };
  labelsWithIcon: {
    label: string;
    icon: JSX.Element;
  }[];
  tags: string[];
  contentLinks?: {
    title: string;
    subTitle: string;
    href: string;
  }[];
  linkIsExternal?: boolean;
}

export const RichContentCard = ({
  link,
  labelsWithIcon,
  tags,
  contentLinks,
  linkIsExternal,
}: RichContentCardProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.link} onClick={() => navigate(link.href)}>
        <Link icon={linkIsExternal ? <ExternalLinkIcon /> : <ArrowRightIcon />} iconAlign="start">
          {link.label}
        </Link>
      </div>

      <div className={styles.labelsWithIcon}>
        {labelsWithIcon.map(({ label, icon }, idx) => (
          <LabelWithIcon key={idx} {...{ label, icon }} />
        ))}
      </div>

      <div className={styles.tags}>
        {tags.map((tag, idx) => (
          <Tag key={idx} label={tag} />
        ))}
      </div>

      {contentLinks && (
        <div className={styles.contentLinks}>
          <Divider />
          {contentLinks.map(({ title, subTitle, href }, idx) => (
            <ContentLink key={idx} {...{ title, subTitle, href }} />
          ))}
        </div>
      )}
    </div>
  );
};

interface LabelWithIconProps {
  label: string;
  icon: JSX.Element;
}

const LabelWithIcon = ({ label, icon }: LabelWithIconProps): JSX.Element => {
  return (
    <div className={styles.labelWithIcon}>
      <span className={styles.labelWithIcon_icon}>{icon}</span>
      <span className={styles.labelWithIcon_label}>{label}</span>
    </div>
  );
};

interface ContentLinkProps {
  title: string;
  subTitle: string;
  href: string;
}

const ContentLink = ({ title, subTitle, href }: ContentLinkProps): JSX.Element => {
  return (
    <Link className={styles.contentLink}>
      <div className={styles.contentLink_content}>
        <span className={styles.contentLink_title}>{title}</span>
        <span className={styles.contentLink_subTitle}>{subTitle}</span>
      </div>

      <div>
        <ArrowRightIcon />
      </div>
    </Link>
  );
};
