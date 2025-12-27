import type { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  texst: string;
}

export const Button = ({ texst }: ButtonTypes) => {
  return <button className={styles.button}>{texst}</button>;
};
