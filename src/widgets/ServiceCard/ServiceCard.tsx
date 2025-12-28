import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Service } from "../../mock-data/types";
import { Button } from "../../shared/Button/Button";

import styles from "./ServiceCard.module.scss";
import { addService } from "../../store/servicesSlice";

export const ServiсeCard = ({ id, title, price }: Service) => {
  const [isAdd, setIsAdd] = useState(false);
  const dispatch = useDispatch();

  const handleAddService = () => {
    dispatch(addService({ id, title, price }));
    setIsAdd(true);
  };

  return (
    <div className={styles.serviceCardContainer}>
      <h3>{title}</h3>
      <p>{`Цена: ${price}₽`}</p>
      <Button isAdd={isAdd} onClick={handleAddService} text="Добавить" />
    </div>
  );
};
