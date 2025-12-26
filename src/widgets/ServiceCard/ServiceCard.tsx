import type { Service } from "../../mock-data/types";
import styles from "./ServiceCard.module.scss";

export const ServiseCard = ({ title, price }: Service) => {
  return (
    <div className={styles.serviceCardContainer}>
      <h3>{title}</h3>
      <p>{price}</p>
      <button>Добавить</button>
    </div>
  );
};
