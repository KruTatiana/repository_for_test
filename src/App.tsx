import "./App.css";
import { ServiseCard } from "./widgets/ServiceCard";
import { Result } from "./widgets/Result/Result";
import { ServiceData } from "./mock-data/data";

function App() {
  return (
    <>
      {ServiceData.map((service) => (
        <ServiseCard
          key={service.id}
          id={service.id}
          title={service.title}
          price={service.price}
          isAdd={service.isAdd}
        />
      ))}
      <Result />
    </>
  );
}

export default App;
