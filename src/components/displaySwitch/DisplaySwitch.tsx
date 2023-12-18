import * as React from "react";
import * as styles from "./DisplaySwitch.module.css";
import _ from "lodash";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { Button, ButtonGroup } from "@utrecht/component-library-react/dist/css-module";

interface DisplaySwitchProps {
  buttons: DisplaySwitchButtonProps[];
  layoutClassName?: string;
}

interface DisplaySwitchButtonProps {
  label: string;
  pressed: boolean;
  handleClick: () => any;
  icon?: {
    name: IconName;
    prefix: IconPrefix;
  };
}

export declare type IDisplaySwitchButton = DisplaySwitchButtonProps;

const DisplaySwitch: React.FC<DisplaySwitchProps> = ({ layoutClassName, buttons }) => {
  return (
    <ButtonGroup className={clsx(styles.displaySwitchButtons, [layoutClassName] && layoutClassName)}>
      {buttons.map((button, idx: number) => {
        // TODO: Once the Rotterdam design system supports the "pressed" state,
        // remove the `appereance` switch, and use the same appearance for each button.
        return (
          <Button
            key={idx}
            pressed={button.pressed}
            appearance={button.pressed ? "secondary-action-button" : "subtle-button"}
            onClick={button.handleClick}
            className={styles.button}
          >
            {button.icon && <FontAwesomeIcon icon={[button.icon.prefix, button.icon.name]} />}
            <span>{button.label}</span>
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default DisplaySwitch;
