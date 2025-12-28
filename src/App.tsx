import { Result } from "./widgets";
import { Serviсes } from "./features";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Serviсes />
      <Result />
    </div>
  );
}

export default App;
