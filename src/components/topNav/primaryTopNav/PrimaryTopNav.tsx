import * as React from "react";
import * as styles from "./PrimaryTopNav.module.css";
import clsx from "clsx";
import { Link } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

interface ITopNavItemBase {
  label: string;
  icon?: JSX.Element;
  showToolTip?: boolean;
  current?: boolean | ICurrentItemJSONFormat;
}

interface ICurrentItemJSONFormat {
  pathname: string;
  operator: "equals" | "includes";
  filterCondition?: {
    filter: string;
    value: string;
    isObject: boolean;
  };
}

interface IIconJSONFormat {
  icon?: {
    icon: IconName;
    prefix: IconPrefix;
    placement: "left" | "right";
  };
  customIcon?: {
    icon: string;
    placement: "left" | "right";
  };
}

interface IHandleClickJSONFormat {
  link: string;
  setFilter?: {
    filter: string;
    value: string;
  };
}

interface ITopNavItemWithSubItems extends ITopNavItemBase {
  handleClick?: never;
  subItems: ITopNavItem[];
}

interface ITopNavItemWithoutSubItems extends ITopNavItemBase {
  handleClick?: () => any | IHandleClickJSONFormat;
  type: "readme" | "internal" | "external";
  subItems?: never;
}

export type ITopNavItem = ITopNavItemWithSubItems | ITopNavItemWithoutSubItems;

export interface TopNavProps {
  items: ITopNavItem[];
  tooltipId: string;
  mobileLogo?: JSX.Element;
  layoutClassName?: string;
}

export const PrimaryTopNav = ({ items, mobileLogo, layoutClassName, tooltipId }: TopNavProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(window.innerWidth < 992);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubItemClick = (handleClick: any) => {
    setIsOpen(false);

    handleClick();
  };

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
                {icon && icon}
                {label}{" "}
                {subItems && isMobile && <FontAwesomeIcon className={styles.toggleIcon} icon={faChevronRight} />}
              </Link>

              {subItems && (
                <ul className={clsx(styles.dropdown, [subItems.length > 8 && styles.dropdownOverflow])}>
                  {subItems.map(({ label, icon, current, handleClick, showToolTip }, idx) => (
                    <li
                      key={idx}
                      className={clsx(styles.li, current && styles.current)}
                      onClick={() => handleSubItemClick(handleClick)}
                    >
                      <Link
                        data-tooltip-id={showToolTip === true ? tooltipId : ""}
                        data-tooltip-content={showToolTip === true ? label : ""}
                        className={clsx(styles.link, styles.label, current && styles.currentLink)}
                      >
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
