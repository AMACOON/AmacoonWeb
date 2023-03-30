import React from "react";

const DadosGato = ({ gato = {}, title, onInputChange }) => {
  console.log("Dados do gato:", gato); // Adicionar aqui
  return (
    <div>
      <h3>{title}</h3>
      {Object.keys(gato).length === 0 ? (
        <p>Selecione um gato</p>
      ) : (
        <>
          <p>Nome: {gato.Name}</p>
          <p>Registro: {gato.Registration}</p>
          <p>Microchip: {gato.Microchip}</p>
          <p>Raça: {gato.BreedName}</p>
          <p>Cor: {gato.ColorName}</p>
          {/* ... outros campos do gato */}
        </>
      )}
    </div>
  );
};

export default DadosGato;
