import { Button } from "../button/Button";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      {/* <img
        className={styles.hero__img}
        src="asd"
        alt="Profile"
        width={200}
        height={200}
      /> */}
      <h2 className={styles.hero__subtitle}>задание № 3</h2>
      <h1 className={styles.hero__title}>Привет, я Денис 👋</h1>
      <p className={styles.hero__description}>
        Сверстал <strong>лэндинг</strong> чтобы вы могли оценить мои навыки в
        работе с различными технологиями. По кнопке "изменить стили" будет
        происходить тогл дневного и ночного режима. Браузер будет запоминать
        ваше состояние режима и при перезагрузке он будет сохранен.
      </p>
      <p className={styles.hero__description}>
        Так же сайт адаптивный под разные разрешения экрана, можете попробовать
        зайти с другого устройства, он под него подстроится.
      </p>
      <Button text="Reach Out" className={styles.hero__button} />
    </section>
  );
};
