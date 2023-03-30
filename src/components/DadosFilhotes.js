import React from "react";

const DadosFilhotes = ({ setFilhotes,dadosFilhotes }) => {
 
  const handleFilhoteChange = (event, index, field) => {
    const newFilhotes = [...dadosFilhotes];
    newFilhotes[index][field] = event.target.value;
    setFilhotes(newFilhotes);
  };

  const handleAddFilhote = () => {
    setFilhotes([
      ...dadosFilhotes,
      {
        nome: "",
        microchip: "",
        EMS: "",
        olhos: "",
        sexo: "",
        status: "",
      },
    ]);
  };

  const handleRemoveFilhote = (index) => {
    const newFilhotes = dadosFilhotes.filter((filhote, i) => i !== index);
    setFilhotes(newFilhotes);
  };
  
  return (
    <div>
      <h3>Dados do Filhotes</h3>
      {dadosFilhotes.map((dadosFilhotes, index) => {
        return (
          <div key={index}>
            <h3>Filhote {index + 1}</h3>

            <label htmlFor={`nome-${index}`}>Nome</label>
            <input
              type="text"
              id={`nome-${index}`}
              value={dadosFilhotes.nome}
              onChange={(e) => handleFilhoteChange(e, index, "nome")}
            />

            <label htmlFor={`microchip-${index}`}>Microchip</label>
            <input
              type="text"
              id={`microchip-${index}`}
              value={dadosFilhotes.microchip}
              onChange={(e) => handleFilhoteChange(e, index, "microchip")}
            />

            <label htmlFor={`EMS-${index}`}>EMS</label>
            <input
              type="text"
              id={`EMS-${index}`}
              value={dadosFilhotes.EMS}
              onChange={(e) => handleFilhoteChange(e, index, "EMS")}
            />

            <label htmlFor={`cor-${index}`}>Cor</label>
            <input
              type="text"
              id={`cor-${index}`}
              value={dadosFilhotes.cor}
              onChange={(e) => handleFilhoteChange(e, index, "cor")}
            />

            <label htmlFor={`sexo-${index}`}>Sexo</label>
            <select
              id={`sexo-${index}`}
              value={dadosFilhotes.sexo}
              onChange={(e) => handleFilhoteChange(e, index, "sexo")}
            >
              <option value="">Selecione o sexo</option>
              <option value="M">Macho</option>
              <option value="F">Fêmea</option>
            </select>

            <label htmlFor={`status-${index}`}>Status</label>
            <input
              type="text"
              id={`status-${index}`}
              value={dadosFilhotes.status}
              onChange={(e) => handleFilhoteChange(e, index, "status")}
            />

            <button type="button" onClick={() => handleRemoveFilhote(index)}>Remover</button>
          </div>
        );
      })}
      <div>
      <button type="button" onClick={handleAddFilhote}>
            Adicionar Filhote
          </button>
          </div>
    </div>
  );
};

export default DadosFilhotes;
