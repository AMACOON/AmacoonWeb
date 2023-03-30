import React, { useState, useEffect } from "react";
import useBreeds from "./hooks/useBreeds";
import useColors from "./hooks/useColors";
import DadosProprietario from "./DadosProprietario";

const DadosGatoManual = ({ onChange }) => {
  const { breeds } = useBreeds();
  const [selectedBreed, setSelectedBreed] = useState("");
  const { colors } = useColors(selectedBreed);

  const handleBreedSelection = (event) => {
    setSelectedBreed(event.target.value);
  };

  useEffect(() => {
    setSelectedBreed("");
  }, [breeds]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "ColorName") {
      const selectedColor = colors.find((color) => color.ColorName === value);
      setSelectedColor(selectedColor);
      onChange("CodigoEMS", selectedColor?.EmsCode || "");
    } else {
      onChange(name, value);
    }
  };
  
  
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <h3>Dados do Gato</h3>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="Name" onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="registro">Registro:</label>
        <input type="text" id="registro" name="Registration" onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="microchip">Microchip:</label>
        <input type="text" id="microchip" name="Microchip" onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="raca">Raça:</label>
        {breeds && breeds.length > 0 ? (
          <select id="raca" name="BreedName" onChange={handleBreedSelection} value={selectedBreed}>
          <option value="">Selecione uma raça</option>
          {breeds.map((breed) => (
            <option key={breed.BreedID} value={breed.BreedID}>
              {breed.BreedName}
            </option>
          ))}
        </select>
        

        ) : (
          <p>Carregando raças...</p>
        )}
      </div>
      <div>
  <label htmlFor="cor">Cor:</label>
  {colors && colors.length > 0 ? (
    <select id="cor" name="ColorName" onChange={handleInputChange}>
      <option value="">Selecione uma cor</option>
      {colors.map((color) => (
        <option key={color.ColorID} value={color.ColorName}>
          {color.ColorName}
        </option>
      ))}
    </select>
  ) : null}
</div>
<div>

<div>
  <label htmlFor="codigoEMS">Código EMS:</label>
  {selectedColor && selectedColor.EmsCode ? (
    <input
      type="text"
      id="codigoEMS"
      name="CodigoEMS"
      value={selectedColor.EmsCode}
      readOnly
    />
  ) : (
    <p>Selecione uma cor para carregar o código EMS</p>
  )}
</div>

  
      <div>
        <DadosProprietario handleInputChange={handleInputChange} />
      </div>
    
</div>
    </div>
  );
};

export default DadosGatoManual;
