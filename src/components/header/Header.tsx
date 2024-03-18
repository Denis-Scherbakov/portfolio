import styles from "./header.module.css";
import { Button } from "../button/Button";

type HeaderProps = {
  openMobileMenu: () => void;
  toggleDarkMode: () => void;
};

export const Header = ({ openMobileMenu, toggleDarkMode }: HeaderProps) => {
  return (
    <header className={`${styles.header} container`}>
      <nav>
        <ul className={styles.header__menu}>
          <li>
            <a className={styles.header__link} href="#about">
              about
            </a>
          </li>
          <li>
            <a className={styles.header__link} href="#featured">
              featured
            </a>
          </li>
          <li>
            <a className={styles.header__link} href="#contact">
              contact
            </a>
          </li>
          <li className={styles.header__line}></li>
          <li>
            {/* <button className={styles.header__sun} onClick={toggleDarkMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </button> */}
          </li>
          <li>
            <Button
              text="Изменить стили"
              className={styles.header__resume}
              toggleDarkMode={toggleDarkMode}
            />
          </li>
        </ul>
        <button className={styles.header__bars} onClick={openMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};
