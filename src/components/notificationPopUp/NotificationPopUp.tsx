import * as React from "react";
import * as styles from "./NotificationPopUp.module.css";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { Heading3, Link, Paragraph, Button } from "@utrecht/component-library-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";

export interface NotificationPopUpProps {
  title: string;
  description: string | JSX.Element;
  isVisible: boolean;
  hide: () => void;
  primaryButton: {
    label: string;
    icon?: JSX.Element;
    handleClick: () => any;
    layoutClassName?: string;
  };
  secondaryButton?: {
    label: string;
    icon?: JSX.Element;
    handleClick: () => any;
    layoutClassName?: string;
  };
  layoutClassName?: string;
}

export const NotificationPopUp = ({
  title,
  description,
  isVisible,
  hide,
  primaryButton,
  secondaryButton,
  layoutClassName,
}: NotificationPopUpProps): JSX.Element | null => {
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
    <div
      style={{ animationDuration: `${animationDuration}ms` }}
      className={clsx(styles.modal, animationVisible && styles.visible, layoutClassName)}
    >
      <Heading3>{title}</Heading3>

      <Paragraph>{description}</Paragraph>

      <div className={styles.buttons}>
        {secondaryButton && (
          <div onClick={() => handleClick(secondaryButton.handleClick)} className={secondaryButton.layoutClassName}>
            <Link className={styles.link}>
              {secondaryButton.icon ?? <FontAwesomeIcon icon={faClose} />}
              {secondaryButton.label}
            </Link>
          </div>
        )}

        <Button
          onClick={() => handleClick(primaryButton.handleClick)}
          className={clsx(styles.button, primaryButton.layoutClassName)}
        >
          {primaryButton.icon ?? <FontAwesomeIcon icon={faArrowRight} />}
          {primaryButton.label}
        </Button>
      </div>
    </div>
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
