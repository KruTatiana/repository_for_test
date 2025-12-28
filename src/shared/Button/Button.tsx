import type { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isAdd?: boolean;
}

export const Button = ({ onClick, text, isAdd }: ButtonTypes) => {
  return (
    <button disabled={isAdd} onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};
