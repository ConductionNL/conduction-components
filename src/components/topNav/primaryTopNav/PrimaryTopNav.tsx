import * as React from "react";
import * as styles from "./PrimaryTopNav.module.css";
import clsx from "clsx";
import { Link } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
  mobileLogo?: JSX.Element;
  layoutClassName?: string;
}

export const PrimaryTopNav = ({ items, mobileLogo, layoutClassName }: TopNavProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [subNavIsOpen, setSubNavIsOpen] = React.useState({});

  const handleItemClick = (handleClick?: () => any) => {
    if (handleClick) {
      handleClick();

      setIsOpen(false);
    }
  };

  const handleSubItemMenu = (idx: number, value: boolean) => {
    setSubNavIsOpen({
      ...subNavIsOpen,
      [idx as keyof typeof subNavIsOpen]: value,
    });
  };

  const screenWidth = window.innerWidth;

  React.useEffect(() => {
    if (screenWidth > 992) {
      setSubNavIsOpen({});
    }
  }, [screenWidth]);
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
            <li
              onClick={() =>
                !subItems
                  ? handleItemClick(handleClick)
                  : screenWidth > 992
                  ? handleItemClick(handleClick)
                  : handleSubItemMenu(idx, !subNavIsOpen[idx as keyof typeof subNavIsOpen] ?? true)
              }
              className={clsx(styles.li, current && styles.current)}
              key={idx}
            >
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
                  <FontAwesomeIcon
                    className={clsx(styles.toggleIcon, subNavIsOpen[idx as keyof typeof subNavIsOpen] && styles.isOpen)}
                    icon={faChevronRight}
                  />
                )}
              </Link>

              {subItems && (
                <ul className={clsx(styles.dropdown, subNavIsOpen[idx as keyof typeof subNavIsOpen] && styles.isOpen)}>
                  {subItems.map(({ label, icon, current, handleClick }, idx) => (
                    <li
                      key={idx}
                      className={clsx(styles.li, current && styles.current)}
                      onClick={() => handleItemClick(handleClick)}
                    >
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
