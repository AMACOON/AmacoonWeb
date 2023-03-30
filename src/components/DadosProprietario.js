import React from "react";

const DadosProprietario = ({ handleInputChange, owner }) => {
  return (
    <div>
      <h3>Dados do Proprietário</h3>
      <div>
        <label htmlFor="proprietario-nome">Nome:</label>
        <input
          type="text"
          id="proprietario-nome"
          name="ownerName"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="proprietario-email">E-mail:</label>
        <input
          type="text"
          id="proprietario-email"
          name="ownerEmail"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="proprietario-telefone">Telefone:</label>
        <input
          type="text"
          id="proprietario-telefone"
          name="ownerPhone"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="proprietario-endereco">Endereço:</label>
        <input
          type="text"
          id="proprietario-endereco"
          name="ownerAddress"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="proprietario-cidade">Cidade:</label>
        <input
          type="text"
          id="proprietario-cidade"
          name="ownerCity"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="proprietario-estado">Estado:</label>
        <input
          type="text"
          id="proprietario-estado"
          name="ownerState"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="proprietario-pais">País:</label>
        <input
          type="text"
          id="proprietario-pais"
          name="ownerCountry"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default DadosProprietario;
