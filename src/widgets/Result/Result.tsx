import { useSelector } from "react-redux";
import type { Service } from "../../mock-data/types";

import { Button } from "../../shared/Button";
import type { RootState } from "../../store";

export const Result = () => {
  const services = useSelector((state: RootState) => state.services);

  const result = services.reduce((acc, service) => acc + service.price, 0);

  return (
    <>
      <div>
        <ul>
          {services.map((service: Service) => (
            <li key={service.id}>{service.title}</li>
          ))}
        </ul>
        <div>
          <h4>Итого:</h4>
          <p>{result}</p>
        </div>
      </div>
      <Button text="Оформить заказ" />
    </>
  );
};
