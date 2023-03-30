import React, { useState } from "react";
import DadosMachoProprietario from "./DadosMachoProprietario";
import DadosMachoNaoProprietario from "./DadosMachoNaoProprietario";

const DadosMacho = ({ idExpositor, setDadosMacho }) => {
  const [tipoProprietario, setTipoProprietario] = useState(null);

  const handleProprietarioChange = (event) => {
    setTipoProprietario(event.target.value);
  };

  return (
    <>
      <h3>Dados do Macho</h3>
      <div>
        <input
          type="radio"
          id="proprietario"
          name="proprietario"
          value="proprietario"
          onChange={handleProprietarioChange}
        />
        <label htmlFor="proprietario">Sou proprietário</label>
      </div>
      <div>
        <input
          type="radio"
          id="nao-proprietario"
          name="proprietario"
          value="nao-proprietario"
          onChange={handleProprietarioChange}
        />
        <label htmlFor="nao-proprietario">Não sou proprietário</label>
      </div>
      {tipoProprietario === "proprietario" ? (
        <DadosMachoProprietario idExpositor={idExpositor} setDadosMacho={setDadosMacho} />
      ) : tipoProprietario === "nao-proprietario" ? (
        <DadosMachoNaoProprietario setDadosMacho={setDadosMacho} />
      ) : null}
    </>
  );
};

export default DadosMacho;
