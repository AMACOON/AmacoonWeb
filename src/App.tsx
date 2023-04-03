import { useState } from "react";
import Female from "./components/Famale";
import Male from "./components/Male";

function App() {
  const [dataFemale, setDataFemale] = useState({});
  const [dataMale, setDataMale] = useState({});

  return (
    <div>
      <h1>Cadastro de ninhada</h1>

      <form>
        <Female setDataFemale={setDataFemale} />
        <Male setDataMale={setDataMale} />

        <div>
          <button type="submit">Enviar Ninhada</button>
          <button type="button">Log</button>
        </div>
      </form>
    </div>
  );
}

export default App;
