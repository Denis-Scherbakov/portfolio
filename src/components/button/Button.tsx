import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  className?: string;
  linkToProject?: string;
  toggleDarkMode?: () => void;
}

export const Button = ({
  text,
  className,
  linkToProject,
  toggleDarkMode,
}: ButtonProps) => {
  return (
    <a
      className={`${styles.button} ${className ? className : ""}`}
      target="_blank"
      rel="noreferrer"
      href={linkToProject}
      onClick={toggleDarkMode ? toggleDarkMode : undefined}
    >
      {text}
    </a>
  );
};
