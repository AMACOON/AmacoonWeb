import React, { useState } from "react";
import useCountries from "./hooks/useCountries";

const DadosNascimento = ({ setDadosNascimento }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  console.log(selectedCountry)
  const { countries } = useCountries();
  console.log("Pais", countries)
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <h3>Dados de Nascimento</h3>
      <label htmlFor="pais">Pais</label>
      <select id="pais" name="pais" onChange={handleCountryChange}>
        <option value="">Selecione um país</option>
        {countries.map((country) => (
          <option key={country.CountryCode} value={country.CountryCode}>
            {country.CountryName}
          </option>
        ))}
      </select>

      <label htmlFor="nomeGatil">Nome Gatil</label>
      <input
        type="text"
        id="nomeGatil"
        name="nomeGatil"
        onChange={setDadosNascimento}
      />


      <label htmlFor="raca">Raça</label>
      <input
        type="text"
        id="raca"
        name="raca"
        onChange={setDadosNascimento}
      />

      <label htmlFor="numFilhotes">Nº de Filhotes</label>
      <input
        type="number"
        id="numFilhotes"
        name="numFilhotes"
        onChange={setDadosNascimento}
      />

      <label htmlFor="dataNascimento">Data de Nascimento</label>
      <input
        type="date"
        id="dataNascimento"
        name="dataNascimento"
        onChange={setDadosNascimento}
      />
    </div>
  );
};

export default DadosNascimento;
