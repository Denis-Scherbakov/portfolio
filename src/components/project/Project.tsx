import { Button } from "../button/Button";
import styles from "./project.module.css";

type ProjectProps = {
  title: string;
  techDescription: string;
  description: string;
  preLoadImgPath: string;
  afterLoadImgPath: string;
  linkToProject: string;
  reverse: boolean;
};

export const Project = (props: ProjectProps) => {
  const {
    title,
    techDescription,
    description,
    preLoadImgPath,
    afterLoadImgPath,
    linkToProject,
    reverse,
  } = props;

  return (
    <div
      className={
        reverse
          ? `${styles.project__wrapper__reverse}`
          : `${styles.project__wrapper}`
      }
    >
      <div className={`${styles.project__imgWrapper}`}>
        <img
          width={900}
          height={900}
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
    </div>
  );
};
