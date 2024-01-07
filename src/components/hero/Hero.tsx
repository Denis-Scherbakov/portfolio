import { Button } from "../button/Button";
import styles from "./hero.module.css";
import myPhoto from "../../images/hero.jpg";

export const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <img
        className={styles.hero__img}
        src="asd"
        alt="Profile"
        width={200}
        height={200}
      />
      <h2 className={styles.hero__subtitle}>Привет, я Денис 👋</h2>
      <h1 className={styles.hero__title}>
        FRONT-END <br /> WEB DEVELOPER
      </h1>
      <p className={styles.hero__description}>
        Страстный <strong>Frontend</strong> web developer и{" "}
        <strong>UI/UX</strong> энтузиаст. Специализирующийся в создании крутых,
        pixel-perfect, интерактивных вебсайтов/приложений.
      </p>
      <Button text="Reach Out" className={styles.hero__button} />
    </section>
  );
};
