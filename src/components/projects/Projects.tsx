import { observer } from "mobx-react-lite";
import { Project } from "../project/Project";
import { newProjectsStore } from "../stores/projects-store";
import styles from "./projects.module.css";

export const Projects = observer(() => {
  let { projects } = newProjectsStore;
  console.log(projects);
  return (
    <section className={`${styles.work} container section`}>
      <h2 className={styles.work__title}>Projects</h2>
      <p className={styles.work__description}>
        Здесь пример картинок, в дополнение прикрутил им Lazy loading c
        эффектами размытия при загрузке
      </p>
      <div className={styles.work__projects__container}>
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              reverse={project.reverse}
              title={project.title}
              techDescription={project.techDescription}
              description={project.description}
              preLoadImgPath={project.preLoadImgPath}
              afterLoadImgPath={project.afterLoadImgPath}
              linkToProject={project.linkToProject}
            />
          );
        })}
      </div>
    </section>
  );
});
