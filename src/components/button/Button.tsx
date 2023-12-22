import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  className?: string;
}

export const Button = ({ text, className }: ButtonProps) => {
  return (
    <a
      className={`${styles.button} ${className ? className : ""}`}
      href="google.com"
    >
      {text}
    </a>
  );
};
