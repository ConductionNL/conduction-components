import * as React from "react";
import * as styles from "./ListCard.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import clsx from "clsx";


interface ListCardProps {
  title: string;
  layoutClassName?: string;
  items: { label: string; icon?: JSX.Element; handleClick: () => any }[];
}

export const ListCard: React.FC<ListCardProps> = ({ title, items, layoutClassName }) => {
  return (
    <div className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      <span className={styles.title}>{title}</span>
      {items.map(({ label, icon, handleClick }, idx) => (
        <div  key={idx} onClick={handleClick}>
          <Link className={styles.link}  icon={icon} iconAlign={"start"}>
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
};
