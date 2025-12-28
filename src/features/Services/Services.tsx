import { ServiсeCard } from "../../widgets";
import { ServiceData } from "../../mock-data/data";

import styles from "./Services.module.scss";

export const Serviсes = () => {
  return (
    <div className={styles.servicesContainer}>
      {ServiceData.map((service) => (
        <ServiсeCard
          key={service.id}
          id={service.id}
          title={service.title}
          price={service.price}
        />
      ))}
    </div>
  );
};
