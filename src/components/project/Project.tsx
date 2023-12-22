import waxMotiff from "../../images/waxmoney.png";
import { Button } from "../button/Button";
import styles from "./project.module.css";

export const Project = () => {
  return (
    <>
      <h3 className={styles.project__title}>Wax Motiff</h3>
      <div className={`${styles.project__imgWrapper} ${styles.project__image}`}>
        <img
          className="lazy loading"
          src="https://fakeimg.pl/720"
          data-src={waxMotiff}
          alt="Wax motiff website"
        />
      </div>
      <div
        className={`${styles.project__description__wrapper} ${styles.project__desription__wrapper}`}
      >
        <h3 className={styles.project__subtitle}>Wax Motiff</h3>
        <p className={styles.project__description1}>
          Labore magna ut non labore Lorem nisi culpa sint et quis sint. Enim
          pariatur deserunt do ad exercitation.
        </p>
        <p className={styles.project__description2}>
          Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum
          commodo. Do esse excepteur cillum deserunt duis incididunt. Eu tempor
          ullamco aliqua consectetur incididunt anim dolor sunt laboris
          adipisicing cupidatat sint.
        </p>
        <Button text="Website" className={styles.project__button} />
      </div>
    </>
  );
};
