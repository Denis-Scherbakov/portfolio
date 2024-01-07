import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  className?: string;
  linkToProject?: string;
}

export const Button = ({ text, className, linkToProject }: ButtonProps) => {
  return (
    <a
      className={`${styles.button} ${className ? className : ""}`}
      target="_blank"
      rel="noreferrer"
      href={linkToProject}
    >
      {text}
    </a>
  );
};
