import { useSelector } from "react-redux";
import type { Service } from "../../mock-data/types";

import { Button } from "../../shared/Button/Button";
import type { RootState } from "../../store";

import styles from "./Result.module.scss";

export const Result = () => {
  const services = useSelector((state: RootState) => state.services);

  const result = services.reduce((acc, service) => acc + service.price, 0);

  return (
    <div className={styles.resultContainer}>
      <div>
        <ul className={styles.resultList}>
          {services.map((service: Service) => (
            <li key={service.id}>{service.title}</li>
          ))}
        </ul>
        <div className={styles.resultSum}>
          <h4>Итого:</h4>
          <p>{`${result} ₽`}</p>
        </div>
      </div>
      <Button text="Оформить заказ" />
    </div>
  );
};
