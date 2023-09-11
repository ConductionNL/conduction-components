import * as React from "react";

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

// Tabs
export const Tabs: ReactTabsFunctionComponent<TabsProps> = ({ children, ...otherProps }) => (
  <RTabs {...otherProps}>
    <h1>{children}</h1>
  </RTabs>
);

Tabs.tabsRole = "Tabs";

// TabList
export const TabList: ReactTabsFunctionComponent<TabListProps> = ({ children, ...otherProps }) => (
  <RTabList {...otherProps}>{children}</RTabList>
);

TabList.tabsRole = "TabList";

// Tab
export const Tab: ReactTabsFunctionComponent<TabProps> = ({ children, ...otherProps }) => (
  <RTab {...otherProps}>{children}</RTab>
);

Tab.tabsRole = "Tab";

// TabPanel
export const TabPanel: ReactTabsFunctionComponent<TabPanelProps> = ({ children, ...otherProps }) => (
  <RTabPanel {...otherProps}>{children}</RTabPanel>
);

TabPanel.tabsRole = "TabPanel";
