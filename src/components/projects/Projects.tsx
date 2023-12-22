import { Project } from "../project/Project";
import styles from "./projects.module.css";

export const Projects = () => {
  return (
    <section className={`${styles.work} container section`}>
      <h2 className={styles.work__title}>Projects</h2>
      <p className={styles.work__description}>
        Mollit pariatur tempor nisi dolor non consequat magna cupidatat
        reprehenderit. Aliquip excepteur ullamco aliquip magna est et commodo
        deserunt ipsum.
      </p>
      <div className={styles.work__projects__container}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};
