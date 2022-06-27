import * as React from "react";
import { Link } from "@gemeente-denhaag/components-react";
import * as styles from "./TopNav.module.css";
import clsx from "clsx";

interface TopNavProps {
  items: { label: string; icon?: JSX.Element; handleClick: () => any }[];
  layoutClassName?: string;
}

export const PrimaryTopNav: React.FC<TopNavProps> = ({ items, layoutClassName }) => {
  return (
    <div className={clsx(styles.primary, layoutClassName && layoutClassName)}>
      <nav className={styles.primary}>
        <ul className={styles.ul}>
          {items.map(({ label, icon, handleClick }, idx) => (
            <li className={styles.li} key={idx} onClick={handleClick}>
              <Link className={styles.link} icon={icon} iconAlign="start">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export const SecondaryTopNav: React.FC<TopNavProps> = ({ items, layoutClassName }) => {
  return (
    <div className={clsx(styles.secondary, layoutClassName && layoutClassName)}>
      <nav>
        <ul className={styles.ul}>
          {items.map(({ label, icon, handleClick }, idx) => (
            <li className={styles.li} key={idx} onClick={handleClick}>
              <Link className={styles.link} icon={icon} iconAlign="start">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
