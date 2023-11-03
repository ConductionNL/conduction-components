import * as React from "react";
import * as styles from "./Jumbotron.module.css";
import clsx from "clsx";
import { Paragraph, Page, PageContent, Heading1, Image } from "@utrecht/component-library-react/dist/css-module";
import { Container } from "../container/Container";
import { CardWrapper } from "../card";

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
  container?: boolean;
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
  container,
}) => {
  return (
    <OptionalContainer {...{ container }}>
      <div
        aria-label={ariaLabel.container}
        role={role}
        style={{
          backgroundImage: image?.placement === "background" ? `url(${image.url})` : "",
        }}
        className={clsx(
          image?.placement === "background" && styles.backgroundImageWrapper,
          image?.placement === "right" && styles.rightImageWrapper,
        )}
      >
        <Page>
          <PageContent>
            <ImageContainer image={{ placement: image?.placement ?? "false", url: image?.url ?? "" }}>
              <SearchForm searchForm={{ show: searchForm?.show ?? false, element: searchForm?.element ?? <></> }}>
                {isCard && (
                  <JumbotronCard {...{ title, ariaLabel, role, subTitle, description, image, isCard, searchForm }} />
                )}
                {!isCard && (
                  <JumbotronContent {...{ title, ariaLabel, role, subTitle, description, image, isCard, searchForm }} />
                )}
              </SearchForm>
            </ImageContainer>
          </PageContent>
        </Page>
      </div>
    </OptionalContainer>
  );
};

interface ContainerProps {
  children: React.ReactNode;
  container: boolean | undefined;
}

const OptionalContainer: React.FC<ContainerProps> = ({ children, container }) => {
  if (container === true) return <Container layoutClassName={styles.wrapper}>{children}</Container>;

  return <>{children}</>;
};

interface ImageContainerProps {
  children: React.ReactNode;
  image: {
    placement: "false" | "background" | "right";
    url: string;
  };
}

const ImageContainer: React.FC<ImageContainerProps> = ({ children, image }) => {
  if (image.placement === "right")
    return (
      <div className={styles.imageRightContainer}>
        {children}
        {<Image src={image.url} alt={"jumbotron-image"} className={styles.image} />}
      </div>
    );

  if (image.placement === "false" || image.placement === "background") return <>{children}</>;

  return <>{children}</>;
};

interface SearchFormProps {
  children: React.ReactNode;
  searchForm: {
    element: JSX.Element;
    show: boolean;
  };
}

const SearchForm: React.FC<SearchFormProps> = ({
  children,

  searchForm,
}) => {
  if (searchForm.show)
    return (
      <section className={clsx(styles.headerSearchForm)}>
        {children}
        {searchForm.element}
      </section>
    );

  return <>{children}</>;
};

const JumbotronCard: React.FC<JumbotronProps> = ({ title, ariaLabel, subTitle, description, image, searchForm }) => {
  return (
    <CardWrapper aria-label={ariaLabel.card} role="contentinfo" className={styles.card}>
      <Heading1 className={clsx(image?.placement === "right" ? styles.cardAndImageTitle : styles.cardTitle)}>
        {title}{" "}
      </Heading1>
      <span className={styles.cardSubTitle}>{subTitle}</span>

      <Paragraph className={styles.cardDescription}>{description}</Paragraph>
    </CardWrapper>
  );
};

const JumbotronContent: React.FC<JumbotronProps> = ({ title, subTitle, description, image, searchForm }) => {
  return (
    <div>
      <Heading1 className={clsx(clsx(styles.title, !subTitle && styles.titleSingle))}>{title}</Heading1>
      {subTitle && <span className={styles.subTitle}>{subTitle}</span>}

      {description && <Paragraph className={styles.description}>{description}</Paragraph>}
    </div>
  );
};
