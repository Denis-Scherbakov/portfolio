import styles from "./about.module.css";
import aboutPicture from "../../images/about.jpg";

export const About = () => {
  return (
    <section id="about" className={`${styles.about} container section`}>
      <div className={styles.about__content}>
        <h2 className={styles.about__title}>About</h2>
        <p className={styles.about__description}>
          Hello there! I'm Ramzi, a{" "}
          <strong>Frontend / Fullstack-Jamstack</strong> web developer based
          near Montreal. I wake up in the morning, grab a cup of timmies coffee,
          open up my laptop and build things that live on the web all day,
          everyday.
        </p>
        <p className={styles.about__description}>
          People who know me say I'm obsessed, that's fair, I am very driven and
          love learning new things.
        </p>
        <p className={styles.about__description}>
          I recently created a YouTube channel called{" "}
          <a href="/">Slaying The Dragon</a> where I upload videos on front-end
          web development topics.
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
            <li className={styles.about__list}>NextJS</li>
            <li className={styles.about__list}>TailwindCSS</li>
          </ul>
        </div>
      </div>
      <div className={styles.about__img__wrapper}>
        <img
          className={`${styles.about__image} lazy loading`}
          src="https://fakeimg.pl/720"
          data-src={aboutPicture}
          alt="Me"
          width={428}
          height={428}
        />
      </div>
    </section>
  );
};
