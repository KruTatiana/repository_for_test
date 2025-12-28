import type { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ onClick, text }: ButtonTypes) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};
