import * as React from "react";
import * as styles from "./NotificationPopUp.module.css";
import ReactDOM from "react-dom";
import { Button, Heading3, Link, Paragraph, StylesProvider } from "@gemeente-denhaag/components-react";
import clsx from "clsx";
import { CloseIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";

export interface NotificationPopUpProps {
  title: string;
  description: string | JSX.Element;
  isVisible: boolean;
  hide: () => void;
  primaryButton: {
    label: string;
    icon?: JSX.Element;
    handleClick: () => any;
  };
  secondaryButton?: {
    label: string;
    icon?: JSX.Element;

    handleClick: () => any;
  };
  layoutClassName?: string;
}

export const NotificationPopUp: React.FC<NotificationPopUpProps> = ({
  title,
  description,
  isVisible,
  hide,
  primaryButton,
  secondaryButton,
  layoutClassName,
}) => {
  const [animationVisible, setAnimationVisible] = React.useState<boolean>(true);

  const animationDuration = parseInt(styles.animationDuration, 10);

  const handleClick = (clickFunction?: () => any) => {
    setAnimationVisible(!setAnimationVisible);
    clickFunction && clickFunction();
    setTimeout(() => {
      hide();
      setAnimationVisible(true);
    }, animationDuration);
  };

  const modal = (
    <StylesProvider>
      <div
        style={{ animationDuration: `${animationDuration}ms` }}
        className={clsx(styles.modal, animationVisible && styles.visible, layoutClassName)}
      >
        <Heading3>{title}</Heading3>
        <Paragraph>{description}</Paragraph>
        <div className={styles.buttons}>
          {secondaryButton && (
            <div onClick={() => handleClick(secondaryButton.handleClick)}>
              <Link icon={secondaryButton.icon ? secondaryButton.icon : <CloseIcon />} iconAlign="start">
                {secondaryButton.label}
              </Link>
            </div>
          )}
          <Button
            icon={primaryButton.icon ? primaryButton.icon : <ArrowRightIcon />}
            onClick={() => handleClick(primaryButton.handleClick)}
          >
            {primaryButton.label}
          </Button>
        </div>
      </div>
    </StylesProvider>
  );

  return isVisible ? ReactDOM.createPortal(modal, document.body) : null;
};

export const NotificationPopUpController = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  return {
    isVisible,
    show,
    hide,
  };
};
