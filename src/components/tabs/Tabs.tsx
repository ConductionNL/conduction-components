import * as React from "react";
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

// Tabs
export const Tabs: ReactTabsFunctionComponent<TabsProps> = ({ children, ...otherProps }) => (
  <RTabs className={styles.tabs} {...otherProps}>
    {children}
  </RTabs>
);

Tabs.tabsRole = "Tabs";

// TabList
export const TabList: ReactTabsFunctionComponent<TabListProps> = ({ children, ...otherProps }) => (
  <RTabList className={styles.tabList} {...otherProps}>
    {children}
  </RTabList>
);

TabList.tabsRole = "TabList";

interface RTabProps {
  badge?: boolean;
}

// Tab
export const Tab: ReactTabsFunctionComponent<TabProps & RTabProps> = ({ children, badge, ...otherProps }) => (
  <RTab className={clsx(styles.tab, badge && styles.tabBadge)} {...otherProps}>
    {children}
  </RTab>
);

Tab.tabsRole = "Tab";

// TabPanel
export const TabPanel: ReactTabsFunctionComponent<TabPanelProps> = ({ children, ...otherProps }) => (
  <RTabPanel {...otherProps}>{children}</RTabPanel>
);

TabPanel.tabsRole = "TabPanel";
