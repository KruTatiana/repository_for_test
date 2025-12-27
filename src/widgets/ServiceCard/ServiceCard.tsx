import { useDispatch } from "react-redux";
import type { Service } from "../../mock-data/types";
import { Button } from "../../shared/Button";

import styles from "./ServiceCard.module.scss";
import { addService } from "../../store/servicesSlice";

export const ServiсeCard = ({ id, title, price }: Service) => {
  const dispatch = useDispatch();

  const handleAddService = () => {
    dispatch(addService({ id, title, price }));
  };

  return (
    <div className={styles.serviceCardContainer}>
      <h3>{title}</h3>
      <p>{price}</p>
      <Button onClick={handleAddService} text="Добавить" />
    </div>
  );
};
