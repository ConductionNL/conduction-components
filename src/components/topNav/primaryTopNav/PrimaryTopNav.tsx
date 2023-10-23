import * as React from "react";
import * as styles from "./PrimaryTopNav.module.css";
import clsx from "clsx";
import { Link } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface ITopNavItemBase {
  label: string;
  icon?: JSX.Element;
  current?: boolean;
}

interface ITopNavItemWithSubItems extends ITopNavItemBase {
  handleClick?: never;
  subItems: ITopNavItem[];
}

interface ITopNavItemWithoutSubItems extends ITopNavItemBase {
  handleClick?: () => any;
  subItems?: never;
}

export type ITopNavItem = ITopNavItemWithSubItems | ITopNavItemWithoutSubItems;

export interface TopNavProps {
  items: ITopNavItem[];
  mobileLogo?: JSX.Element;
  layoutClassName?: string;
}

export const PrimaryTopNav = ({ items, mobileLogo, layoutClassName }: TopNavProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const screenWidth = window.innerWidth;

  return (
    <div className={clsx(styles.container, layoutClassName && layoutClassName)}>
      <div className={styles.menuToggleContainer}>
        {mobileLogo}

        <button className={styles.menuToggle} onClick={() => setIsOpen((o) => !o)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <nav className={clsx(styles.primary, isOpen && styles.isOpen)}>
        <ul className={styles.ul}>
          {items.map(({ label, icon, current, handleClick, subItems }, idx) => (
            <li onClick={handleClick} className={clsx(styles.li, current && styles.current)} key={idx}>
              <Link
                className={clsx(
                  styles.link,
                  styles.label,
                  subItems && styles.mobileLink,
                  current && styles.currentLink,
                )}
              >
                {icon}
                {label}{" "}
                {subItems && screenWidth < 992 && (
                  <FontAwesomeIcon className={styles.toggleIcon} icon={faChevronRight} />
                )}
              </Link>

              {subItems && (
                <ul className={styles.dropdown}>
                  {subItems.map(({ label, icon, current, handleClick }, idx) => (
                    <li key={idx} className={clsx(styles.li, current && styles.current)} onClick={handleClick}>
                      <Link className={clsx(styles.link, styles.label, current && styles.currentLink)}>
                        {icon}
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
