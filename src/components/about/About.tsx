import styles from "./about.module.css";
import aboutPicture from "../../images/about.jpg";

export const About = () => {
  return (
    <section id="about" className={`${styles.about} container section`}>
      <div className={styles.about__content}>
        <h2 className={styles.about__title}>About</h2>
        <p className={styles.about__description}>
          Привет! Я Денис, <strong>Frontend</strong> web developer из Воронежа.
          Каждое утро я встаю, наливаю чашечку кофе и создаю приложения, которые
          делают наш мир удобней.
        </p>
        <p className={styles.about__description}>
          Люди которые меня знают, говорят, что я одержим. И это верно. Я очень
          люблю узнавать что то новое и постоянно совершенствоваться.
        </p>
        <hr className={styles.about__hr} />
        <h3 className={styles.about__subtitle}>Technologies</h3>
        <div className={styles.about__ul__container}>
          <ul className={styles.about__ul}>
            <li className={styles.about__list}>JavaScript (ES6+)</li>
            <li className={styles.about__list}>CSS</li>
            <li className={styles.about__list}>HTML</li>
          </ul>
          <ul className={styles.about__ul}>
            <li className={styles.about__list}>ReactJS</li>
            <li className={styles.about__list}>Typescript</li>
            <li className={styles.about__list}>React/Mobx</li>
          </ul>
        </div>
      </div>
      <div className={styles.about__img__wrapper}>
        <img
          className={`${styles.about__image} lazy loading`}
          src="https://fakeimg.pl/720"
          data-src={123}
          alt="Me"
          width={428}
          height={428}
        />
      </div>
    </section>
  );
};
