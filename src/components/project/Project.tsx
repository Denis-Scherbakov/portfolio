import { Button } from "../button/Button";
import styles from "./project.module.css";

type ProjectProps = {
  title: string;
  techDescription: string;
  description: string;
  preLoadImgPath: string;
  afterLoadImgPath: string;
  linkToProject: string;
  id?: string;
};

export const Project = (props: ProjectProps) => {
  const {
    title,
    techDescription,
    description,
    preLoadImgPath,
    afterLoadImgPath,
    linkToProject,
  } = props;

  return (
    <>
      <h3 className={styles.project__title}>{title}</h3>
      <div className={`${styles.project__imgWrapper} ${styles.project__image}`}>
        <img
          className="lazy loading"
          src={preLoadImgPath}
          data-src={require(`../../images/${afterLoadImgPath}.png`)}
          alt="Wax motiff website"
        />
      </div>
      <div
        className={`${styles.project__description__wrapper} ${styles.project__desription__wrapper}`}
      >
        <h3 className={styles.project__subtitle}>{title}</h3>
        <p className={styles.project__description1}>{techDescription}</p>
        <p className={styles.project__description2}>{description}</p>
        <Button
          text="Website"
          linkToProject={linkToProject}
          className={styles.project__button}
        />
      </div>
    </>
  );
};
