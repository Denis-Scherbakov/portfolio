import { Button } from "../button/Button";
import styles from "./hero.module.css";
import myPhoto from "../../images/hero.jpg";

export const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <img
        className={styles.hero__img}
        src={myPhoto}
        alt="Profile"
        width={200}
        height={200}
      />
      <h2 className={styles.hero__subtitle}>Hi, I'm Ramzi 👋</h2>
      <h1 className={styles.hero__title}>
        FRONT-END <br /> WEB DEVELOPER.
      </h1>
      <p className={styles.hero__description}>
        A passionate <strong>Frontend / Fullstack-Jamstack</strong> web
        developer and <strong>UI/UX</strong> enthusiast specialized in building
        stunning pixel-perfect interactive websites/applications.
      </p>
      <Button text="Reach Out" className={styles.hero__button} />
    </section>
  );
};
