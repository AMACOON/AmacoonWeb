import { useState } from "react";
import Female from "./components/Female";
import Male from "./components/Male";
import Birth from "./components/Birth";
import Litter from "./components/Litter";

function App() {
  const [dataFemale, setDataFemale] = useState({});
  const [dataMale, setDataMale] = useState({});
  const [dataBirth, setDataBirth] = useState({});
  const [dataLitter, setDataLitter] = useState({});

  const handleLogClick = () => {
    console.log("Data Female: ", dataFemale);
    console.log("Data Male: ", dataMale);
    console.log("Data Birth: ", dataBirth);
    console.log("Data Litter: ", dataLitter);
  }

  const handleBirthDataChange = (name: string, value: string) => {
    setDataBirth({...dataBirth, [name]: value});
  };

  const handleBLitterDataChange = (name: string, value: string) => {
    setDataLitter({...dataLitter, [name]: value});
  };

  return (
    <div>
      <h1>Cadastro de ninhada</h1>

      <form>
        <Female setDataFemale={setDataFemale} />
        <Male setDataMale={setDataMale} />
        <Birth onChange={handleBirthDataChange} />
        <Litter onChange={handleBLitterDataChange} />

        <div>
          <button type="submit">Enviar Ninhada</button>
          <button type="button" onClick={handleLogClick}>Log</button>
        </div>
      </form>
    </div>
  );
}

export default App;
