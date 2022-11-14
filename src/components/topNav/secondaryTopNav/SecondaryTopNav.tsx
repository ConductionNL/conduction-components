import * as React from "react";
import * as styles from "./SecondaryTopNav.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import clsx from "clsx";

interface TopNavProps {
  items: { label: string; icon?: JSX.Element; current?: boolean; handleClick: () => any }[];
  layoutClassName?: string;
}

export const SecondaryTopNav: React.FC<TopNavProps> = ({ items, layoutClassName }) => {
  return (
    <div className={clsx(styles.secondary, layoutClassName && layoutClassName)}>
      <nav>
        <ul className={styles.ul}>
          {items.map(({ label, icon, current, handleClick }, idx) => (
            <li className={clsx(styles.li, current && styles.current)} key={idx} onClick={handleClick}>
              <Link className={clsx(styles.link, styles.label)} icon={icon} iconAlign="start">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
