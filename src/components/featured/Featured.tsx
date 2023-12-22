import styles from "./featured.module.css";
import SlayingTheDragon from "../../images/slayingthedragon.png";
import Courses from "../../images/courses.png";
import Pricing from "../../images/pricing.png";
import Features from "../../images/features.png";
import FAQ from "../../images/faq.png";
import Blog from "../../images/blog.png";
import SignIn from "../../images/signin.png";
import App from "../../images/app.png";

export const Featured = () => {
  return (
    <section id="featured" className={`${styles.featured} container section`}>
      <h3 className={styles.featured__subtitle}>Featured project</h3>
      <div className={styles.featured__wrapper}>
        <h2 className={styles.featured__title}>Slaying the dragon</h2>
        <a href="/" className={styles.featured__link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </a>
      </div>
      <p className={styles.featured__description}>
        Cillum voluptate tempor cillum culpa cupidatat labore voluptate ullamco
        voluptate culpa sunt nulla non. Ad cupidatat dolore quis amet pariatur
        consectetur ullamco. Officia quis id velit duis cupidatat sunt deserunt
        do aliquip nulla laboris.
      </p>
      <div className={styles.featured__infoContainer}>
        <div>
          <h3 className={styles.featured__label}>Tech stack</h3>
          <ul className={styles.featured__techStack}>
            <li className={styles.featured__info}>TailwindCSS</li>
            <li className={styles.featured__info}>ReactJS</li>
            <li className={styles.featured__info}>React-Hook-Form</li>
            <li className={styles.featured__info}>NextJS</li>
            <li className={styles.featured__info}>Axios</li>
            <li className={styles.featured__info}>Supabase</li>
            <li className={styles.featured__info}>Stripe</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.featured__label}>Project type</h3>
          <p className={styles.featured__info}>Fullstack</p>
        </div>
        <div>
          <h3 className={styles.featured__label}>Timeline</h3>
          <p className={styles.featured__info}>December 2022 - present</p>
        </div>
      </div>
      <div className={styles.featured__imgContainer}>
        <div className={styles.featured__imgWrapper}>
          <img
            className="lazy loading"
            src="https://fakeimg.pl/720"
            data-src={SlayingTheDragon}
            alt="web site"
          />
        </div>
        <div className={styles.featured__imgWrapper}>
          <img
            className="lazy loading"
            src="https://fakeimg.pl/720"
            data-src={Courses}
            alt="web site"
          />
        </div>
        <div className={styles.featured__imgWrapper}>
          <img
            className="lazy loading"
            src="https://fakeimg.pl/720"
            data-src={Pricing}
            alt="web site"
          />
        </div>
        <div className={styles.featured__imgWrapper}>
          <img
            className="lazy loading"
            src="https://fakeimg.pl/720"
            data-src={Features}
            alt="web site"
          />
        </div>
        <div className={styles.featured__imgWrapper}>
          <img
            className="lazy loading"
            src="https://fakeimg.pl/720"
            data-src={FAQ}
            alt="web site"
          />
        </div>
        <div className={styles.featured__imgWrapper}>
          <img
            className="lazy loading"
            src="https://fakeimg.pl/720"
            data-src={Blog}
            alt="web site"
          />
        </div>
        <div className={styles.featured__imgWrapper}>
          <img
            className="lazy loading"
            src="https://fakeimg.pl/720"
            data-src={SignIn}
            alt="web site"
          />
        </div>
        <div className={styles.featured__imgWrapper}>
          <img
            className="lazy loading"
            src="https://fakeimg.pl/720"
            data-src={App}
            alt="web site"
          />
        </div>
      </div>
    </section>
  );
};
