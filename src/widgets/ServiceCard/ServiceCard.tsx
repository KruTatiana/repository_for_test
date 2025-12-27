import type { Service } from "../../mock-data/types";
import { Button } from "../../shared/Button";

import styles from "./ServiceCard.module.scss";

export const ServiseCard = ({ title, price }: Service) => {
  return (
    <div className={styles.serviceCardContainer}>
      <h3>{title}</h3>
      <p>{price}</p>
      <Button texst="Добавить" />
    </div>
  );
};
