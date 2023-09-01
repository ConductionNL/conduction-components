import * as React from "react";
import * as styles from "./SecondaryTopNav.module.css";
import { Link } from "@utrecht/component-library-react/dist/css-module";
import clsx from "clsx";

interface TopNavProps {
  items: { label: string; icon?: JSX.Element; current?: boolean; handleClick: () => any }[];
  layoutClassName?: string;
}

export const SecondaryTopNav = ({ items, layoutClassName }: TopNavProps): JSX.Element => {
  return (
    <div className={clsx(styles.secondary, layoutClassName && layoutClassName)}>
      <nav>
        <ul className={styles.ul}>
          {items.map(({ label, icon, current, handleClick }, idx) => (
            <li className={clsx(styles.li, current && styles.current)} key={idx} onClick={handleClick}>
              <Link className={clsx(styles.link, styles.label)}>
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
