import { Button } from "../../shared/Button";

type ResultTypes = {
  service: string;
};

export const Result = ({ service }: ResultTypes) => {
  return (
    <>
      <div>
        <ul>
          <li>{service}</li>
        </ul>
        <div>
          <h4>Итого:</h4>
          <p>0000</p>
        </div>
      </div>
      <Button texst="Оформить заказ" />
    </>
  );
};
