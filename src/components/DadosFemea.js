import React, { useState, useEffect } from "react";
import DadosGato from "./DadosGato";
import DadosGatoManual from "./DadosGatoManual";
import useGatos from "./hooks/useGatos";

const DadosFemea = ({ idExpositor, setDadosFemea }) => {
  const [selectedFemea, setSelectedFemea] = useState("");
  const { gatos: femeas } = useGatos(idExpositor, "F");
  const [showManualData, setShowManualData] = useState(false);

  useEffect(() => {
    console.log("Chamando useGatos...");
  }, [idExpositor]);

  const handleFemeaSelection = (event) => {
    const catId = event.target.value;
    const selectedGato = femeas.find((gato) => gato.CatID === Number(event.target.value));
    if (!selectedGato) {
      console.error(`Não foi possível encontrar um gato com o CatID ${catId}`);
      return;
    }
    setSelectedFemea(selectedGato);
    setDadosFemea(selectedGato);
    setShowManualData(false);
  };

  const handleChangeCheckbox = (event) => {
    if (!selectedFemea) {
      setShowManualData(event.target.checked);
    }
  };

  const handleInputChange = (name, value) => {
    setDadosFemea((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h3>Dados da Fêmea</h3>
      {femeas && femeas.length > 0 ? (
        <select onChange={handleFemeaSelection} value={selectedFemea?.CatID || ""}>
          <option value="">Selecione um gato</option>
          {femeas.map((gato) => (
            <option key={gato.CatID} value={gato.CatID}>
              {gato.Name}
            </option>
          ))}
        </select>
      ) : (
        <p>Nenhum gato encontrado</p>
      )}
      <div>
        <input type="checkbox" id="manualData" name="manualData" value="manualData" onChange={handleChangeCheckbox} disabled={selectedFemea} />
        <label htmlFor="manualData">Se a Gata Não Estiver na Lista - Homologar e Tranferir</label>
      </div>
      {showManualData ? (
        <DadosGatoManual onChange={handleInputChange} />
      ) : (
        selectedFemea && Object.keys(selectedFemea).length > 0 && (
          <>
            <DadosGato gato={selectedFemea} title="Dados do Gato" />
          </>
        )
      )}
    </>
  );
};

export default DadosFemea;
