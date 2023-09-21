import React, { useState, useEffect } from "react";
import * as styles from "./Tabs.module.css";
import {
  Tabs as RTabs,
  TabList as RTabList,
  Tab as RTab,
  TabPanel as RTabPanel,
  ReactTabsFunctionComponent,
  TabProps,
  TabPanelProps,
  TabListProps,
  TabsProps,
} from "react-tabs";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Tabs
export const Tabs: ReactTabsFunctionComponent<TabsProps> = ({ children, ...otherProps }) => (
  <RTabs className={styles.tabs} {...otherProps}>
    {children}
  </RTabs>
);

Tabs.tabsRole = "Tabs";

// TabList
export const TabList: ReactTabsFunctionComponent<TabListProps> = ({ children, ...otherProps }) => {
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (wrapperRef.current) {
      setCanScrollLeft(wrapperRef.current.scrollLeft > 0);
      setCanScrollRight(
        wrapperRef.current.scrollWidth - wrapperRef.current.scrollLeft > wrapperRef.current.clientWidth,
      );
    }
  };

  const handleScrollRight = () => {
    if (wrapperRef.current) wrapperRef.current.scrollTo({ left: wrapperRef.current.scrollWidth, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    if (wrapperRef.current) wrapperRef.current.scrollTo({ left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (wrapperRef.current) {
      setCanScrollRight(wrapperRef.current.scrollWidth > wrapperRef.current.clientWidth); // initiate scroll
    }
  }, []);

  return (
    <div className={styles.container}>
      <div onScroll={handleScroll} ref={wrapperRef} className={clsx(styles.wrapper)}>
        <div className={styles.tabListContainer}>
          {canScrollLeft && (
            <div
              onClick={handleScrollLeft}
              className={clsx(canScrollLeft && styles.scrollLeftButton, styles.tabButton)}
            >
              <span className={styles.scrollButton}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
            </div>
          )}
          <RTabList
            className={clsx(canScrollRight || canScrollLeft ? styles.tabListOverflow : styles.tabList)}
            {...otherProps}
          >
            {children}
          </RTabList>
          {canScrollRight && (
            <div
              onClick={handleScrollRight}
              className={clsx(canScrollRight && styles.scrollRightButton, styles.tabButton)}
            >
              <span className={styles.scrollButton}>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TabList.tabsRole = "TabList";

// Tab
export const Tab: ReactTabsFunctionComponent<TabProps> = ({ children, ...otherProps }) => (
  <RTab className={styles.tab} {...otherProps}>
    {children}
  </RTab>
);

Tab.tabsRole = "Tab";

// TabPanel
export const TabPanel: ReactTabsFunctionComponent<TabPanelProps> = ({ children, ...otherProps }) => (
  <RTabPanel {...otherProps}>{children}</RTabPanel>
);

TabPanel.tabsRole = "TabPanel";
