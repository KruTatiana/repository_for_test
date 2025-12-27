import "./App.css";
import { ServiсeCard } from "./widgets/ServiceCard";
import { Result } from "./widgets/Result/Result";
import { ServiceData } from "./mock-data/data";

function App() {
  return (
    <>
      {ServiceData.map((service) => (
        <ServiсeCard
          key={service.id}
          id={service.id}
          title={service.title}
          price={service.price}
        />
      ))}
      <Result />
    </>
  );
}

export default App;
