import * as React from "react";
import * as styles from "./NotificationModal.module.css";
import ReactDOM from "react-dom";
import { Button, Heading3, Link, Paragraph, StylesProvider } from "@gemeente-denhaag/components-react";
import clsx from "clsx";
import { CloseIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";

export interface ModalProps {
  title: string;
  description: string;
  isShown: boolean;
  hide: () => void;
  primaryButton: {
    label: string;
    handleClick(): any;
  };
  closeButton?: {
    label: string;
  };
  infoLink?: {
    label: string;
    link: string;
  };
  layoutClassName?: string;
}

export const NotificationModal: React.FC<ModalProps> = ({
  title,
  description,
  isShown,
  hide,
  primaryButton,
  closeButton,
  infoLink,
  layoutClassName,
}) => {
  const [fadeOut, setFadeOut] = React.useState<boolean>(true);

  const animationDurationToken = getComputedStyle(document.documentElement).getPropertyValue(
    "--conduction-notification-animation-duration",
  );

  const animationDurationString = animationDurationToken.replace(/\D/g, "");
  const animationDuration = parseInt(animationDurationString);

  const handleClick = (clickFunction?: () => any) => {
    setFadeOut(!setFadeOut);
    clickFunction && clickFunction();
    setTimeout(() => {
      hide();
      setFadeOut(true);
    }, animationDuration);
  };

  const modal = (
    <StylesProvider>
      <div
        className={clsx(
          styles.cssanimation,
          fadeOut ? styles.fadeInBottom : styles.fadeOutBottom,
          layoutClassName ? [layoutClassName && layoutClassName] : styles.defaultContainer,
        )}
      >
        <div className={styles.modal}>
          <Heading3>{title}</Heading3>
          <div>
            <Paragraph>
              {description} {infoLink ? <Link href={infoLink.link}>{infoLink.label}</Link> : <></>}
            </Paragraph>
          </div>
          <div className={styles.buttons}>
            {closeButton ? (
              <div onClick={() => handleClick()}>
                <Link icon={<CloseIcon />} iconAlign="start">
                  {closeButton.label}
                </Link>
              </div>
            ) : (
              <></>
            )}

            <Button icon={<ArrowRightIcon />} onClick={() => handleClick(primaryButton.handleClick)}>
              {primaryButton.label}
            </Button>
          </div>
        </div>
      </div>
    </StylesProvider>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export const toggleNotificationModal = () => {
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const show = () => setIsShown(true);
  const hide = () => setIsShown(false);
  return {
    isShown,
    show,
    hide,
  };
};
