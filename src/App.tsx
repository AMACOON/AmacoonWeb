import { useState } from "react";
import Female from "./components/Female";
import Male from "./components/Male";

function App() {
  const [dataFemale, setDataFemale] = useState({});
  const [dataMale, setDataMale] = useState({});

  const handleLogClick = () => {
    console.log("Data Female: ", dataFemale);
    console.log("Data Male: ", dataMale);
  }

  return (
    <div>
      <h1>Cadastro de ninhada</h1>

      <form>
        <Female setDataFemale={setDataFemale} />
        <Male setDataMale={setDataMale} />

        <div>
          <button type="submit">Enviar Ninhada</button>
          <button type="button" onClick={handleLogClick}>Log</button>
        </div>
      </form>
    </div>
  );
}

export default App;
