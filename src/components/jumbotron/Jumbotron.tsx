import * as React from "react";
import * as styles from "./Jumbotron.module.css";
import clsx from "clsx";
import { Paragraph, Page, PageContent, Heading1, Image } from "@utrecht/component-library-react/dist/css-module";
import { CardWrapper } from "../card";
import { Container } from "../container/Container";

interface JumbotronProps {
  title: string;
  ariaLabel: {
    container: string;
    card: string;
  };
  role: string;
  subTitle?: string;
  description?: string;
  image?: {
    placement: "false" | "background" | "right";
    url: string;
  };
  isCard?: boolean;
  searchForm?: {
    element: JSX.Element;
    show: boolean;
  };
}

export const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  ariaLabel,
  role,
  subTitle,
  description,
  image,
  isCard,
  searchForm,
}) => {
  return (
    <div
      aria-label={ariaLabel.container}
      role={role}
      style={{
        backgroundImage: image?.placement === "background" ? `url(${image.url})` : "",
      }}
      className={clsx(
        image?.placement === "background" && styles.backgroundImageWrapper,
        image?.placement === "right" && styles.rightImageWrapper,
        (!image || image.placement === "false") && styles.wrapper,
      )}
    >
      <Page>
        <PageContent>
          {isCard && (
            <JumbotronCard {...{ title, ariaLabel, role, subTitle, description, image, isCard, searchForm }} />
          )}
          {!isCard && (
            <JumbotronContent {...{ title, ariaLabel, role, subTitle, description, image, isCard, searchForm }} />
          )}
        </PageContent>
      </Page>
    </div>
  );
};

const JumbotronCard: React.FC<JumbotronProps> = ({ title, ariaLabel, subTitle, description, image }) => {
  if (image?.placement === "right")
    return (
      <div className={styles.imageRightContainer}>
        <CardWrapper aria-label={ariaLabel.card} role="contentinfo" className={styles.card}>
          <Heading1 className={styles.cardAndImageTitle}>{title} </Heading1>
          <span className={styles.cardSubTitle}>{subTitle}</span>

          <Paragraph className={styles.cardDescription}>{description}</Paragraph>
        </CardWrapper>
        <Image src={image?.url} alt={"jumbotron-image"} className={styles.image} />
      </div>
    );

  return (
    <CardWrapper aria-label={ariaLabel.card} role="contentinfo" className={styles.card}>
      <Heading1 className={styles.cardTitle}>{title} </Heading1>
      <span className={styles.cardSubTitle}>{subTitle}</span>

      <Paragraph className={styles.cardDescription}>{description}</Paragraph>
    </CardWrapper>
  );
};

const JumbotronContent: React.FC<JumbotronProps> = ({ title, subTitle, description, image, searchForm }) => {
  if (image?.placement === "right")
    return (
      <div className={styles.imageRightContainer}>
        <div>
          <Heading1 className={styles.title}>{title}</Heading1>

          {subTitle && <span className={styles.subTitle}>{subTitle}</span>}

          {description && <Paragraph className={styles.description}>{description}</Paragraph>}
        </div>

        {image?.placement === "right" && <Image src={image?.url} alt={"jumbotron-image"} className={styles.image} />}
      </div>
    );

  return (
    <Container layoutClassName={styles.wrapper}>
      <section className={clsx(searchForm?.show && styles.headerSearchForm)}>
        <div>
          <Heading1 className={styles.title}>{title}</Heading1>

          {subTitle && <span className={styles.subTitle}>{subTitle}</span>}

          {description && <Paragraph className={styles.description}>{description}</Paragraph>}
        </div>
        {searchForm?.show && searchForm.element}
      </section>
    </Container>
  );
};
