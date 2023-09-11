import * as React from "react";
import * as styles from "./Tabs.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BadgeCounter } from "@utrecht/component-library-react";

interface testProps {
  tabs: ITabProps[];
  tabContent: ITabPanelProps[];
}

interface ITabProps {
  name: string;
  badge?: string;
}
interface ITabPanelProps {
  content: JSX.Element;
}

export const TabContext: React.FC<testProps> = ({ tabs, tabContent }) => {
  return (
    <Tabs className={styles.tabs}>
      <TabList className={styles.tabList}>
        {tabs.map(({ name, badge }) => (
          <Tab className={styles.tab}>
            <span>
              {name}
              {badge !== undefined && <BadgeCounter className={styles.badge}>{badge}</BadgeCounter>}
            </span>
          </Tab>
        ))}
      </TabList>
      {tabContent.map(({ content }) => (
        <TabPanel className={styles.tabPanel}>{content}</TabPanel>
      ))}
    </Tabs>
  );
};