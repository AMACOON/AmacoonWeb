import React, { useState } from "react";
import DadosGato from "./DadosGato";
import useGatos from "./hooks/useGatos";

const DadosMachoProprietario = ({ setDadosMacho, idExpositor, dadosMacho }) => {

  const { gatos: machos } = useGatos(idExpositor, "M");
  const [selectedMacho, setSelectedMacho] = useState(null);

  const handleMachoSelection = (event) => {
    const catId = event.target.value;
    console.log('handleMachoSelection called');
    const selectedGato = machos.find((gato) => gato.CatID === Number(event.target.value));
    if (!selectedGato) {
      console.error(`Não foi possível encontrar um gato com o CatID ${catId}`);
      return;
    }
    console.log('selectedGato:', selectedGato);
    setSelectedMacho(selectedGato);
    setDadosMacho(selectedGato);
    console.log('dadosMacho:', dadosMacho);
  };



  return (
    <>

      <select onChange={handleMachoSelection} value={selectedMacho?.CatID || ""}>
        <option value="">Selecione um gato</option>
        {machos.map((gato) => (
          <option key={gato.CatID} value={gato.CatID}>
            {gato.Name}
          </option>
        ))}
      </select>
      {selectedMacho && Object.keys(selectedMacho).length > 0 && (
        <>
          <DadosGato gato={selectedMacho} title="Dados do Gato" />
        </>
      )}
    </>
  );
};

export default DadosMachoProprietario;
