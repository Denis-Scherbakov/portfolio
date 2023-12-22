import { Button } from "../button/Button";
import styles from "./contacts.module.css";

export const Contacts = () => {
  return (
    <section id="contact" className={`${styles.contacts} container section`}>
      <h2 className={styles.contacts__h2}>Get in Contact</h2>
      <p className={styles.contacts__description}>
        Whether you are starting a project, have business inquiries or just want
        to say hi, my inbox is always open so feel free to reach out and I will
        get back to you as soon as possible.
      </p>
      <Button text="Reach Out" className={styles.contacts__button} />
    </section>
  );
};
