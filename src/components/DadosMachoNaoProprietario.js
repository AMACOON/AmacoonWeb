import React, { useState } from "react";
import DadosGato from "./DadosGato";
import DadosGatoManual from "./DadosGatoManual";
import useGatoRegister from "./hooks/useGatoRegister";

const DadosMachoNaoProprietario = ({ setDadosMacho }) => {
  const [usoSistema, setUsoSistema] = useState(true);
  const [registro, setRegistro] = useState("");
  const [showBuscaCampo, setShowBuscaCampo] = useState(false);
  const { gato, isLoading, isError, searchGatoByRegistro } = useGatoRegister();
  const [searchClicked, setSearchClicked] = useState(false);

  const handleUsoSistemaChange = (event) => {
    setUsoSistema(event.target.value === "usar-sistema");
    setShowBuscaCampo(event.target.value === "usar-sistema");
  };

  const handleRegistroChange = (event) => {
    setRegistro(event.target.value);
  };

  const handleBuscarClick = () => {
    setSearchClicked(true);
    if (registro !== "") {
      searchGatoByRegistro(registro);
    }
  };

  const handleInputChange = (name, value) => {
    setDadosMacho((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div>
        <label htmlFor="uso-sistema">Escolher Gatos Sistema</label>
        <select id="uso-sistema" onChange={handleUsoSistemaChange}>
        <option value="selecione">Selecione</option>
          <option value="usar-sistema">Usar sistema</option>
          <option value="preencher-manualmente">Preencher manualmente</option>
        </select>
      </div>
      {showBuscaCampo && (
        <>
          <div>
            <input
              id="registro"
              type="text"
              value={registro}
              onChange={handleRegistroChange}
            />
            <button onClick={handleBuscarClick}>Buscar</button>
          </div>
          {isLoading ? (
            <p>Carregando dados do gato...</p>
          ) : isError ? (
            <p>Gato não encontrado.</p>
          ) : (
            <>
              {gato ? (
                <>
                  <DadosGato gato={gato} title="Dados do Gato" />
                 
                </>
              ) : (
                <>
                  {searchClicked && registro !== "" && <p>Gato não encontrado.</p>}
                </>
              )}
            </>
          )}
        </>
      )}
      {!usoSistema && (
        <>
          <DadosGatoManual onChange={handleInputChange} />
        </>
      )}
    </>
  );
};

export default DadosMachoNaoProprietario;
