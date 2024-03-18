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
        работе с различными технологиями. Так же я сделал чтобы по кнопке в виде
        солнышка(сверху справа или в меню-бутерброде, если смотрите с телефона)
        вы можете менять режим с ночного на дневной. Браузер будет запоминать
        ваше состояние режима и при перезагрузке он будет сохранен.
      </p>
      <Button text="Reach Out" className={styles.hero__button} />
    </section>
  );
};
