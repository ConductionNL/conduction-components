import * as React from "react";
import { Link } from "@gemeente-denhaag/components-react";
import * as styles from "./PrimaryTopNav.module.css";
import clsx from "clsx";

interface ITopNavItem {
  label: string;
  icon?: JSX.Element;
  current?: boolean;
  handleClick?: () => any;
  subItems?: {
    label: string;
    icon?: JSX.Element;
    current?: boolean;
    handleClick?: () => any;
  }[];
}

export interface TopNavProps {
  items: ITopNavItem[];
  layoutClassName?: string;
}

export const PrimaryTopNav: React.FC<TopNavProps> = ({ items, layoutClassName }) => {
  return (
    <div className={clsx(styles.primary, layoutClassName && layoutClassName)}>
      <nav className={styles.primary}>
        <ul className={styles.ul}>
          {items.map(({ label, icon, current, handleClick, subItems }, idx) => (
            <li className={clsx(styles.li, current && styles.current)} key={idx}>
              <div onClick={handleClick}>
                <Link className={styles.link} icon={icon} iconAlign="start">
                  {label}
                </Link>
              </div>

              {subItems && (
                <ul className={styles.dropdown}>
                  {subItems.map(({ label, icon, current, handleClick }, idx) => (
                    <li key={idx} className={clsx(styles.li, current && styles.current)} onClick={handleClick}>
                      <Link className={styles.link} icon={icon} iconAlign="start">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
