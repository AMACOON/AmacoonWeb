import { ChangeEvent } from "react";
import Title from "../Title";

type LitterProps = {
  onChange: (name: string, value: string) => void;
};

export default function Litter({ onChange }: LitterProps) {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const [name, value] = [event.target.name, event.target.value];
    onChange(name, value);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [name, value] = [event.target.name, event.target.value];
    onChange(name, value);
  };

  return (
    <div>
       <Title title="Dados dos Filhotes" />
       <div>
        <label htmlFor="breed">Raça:</label>
        <input 
          type="text"
          id="breed"
          name="breed" 
          onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="color">Cor:</label>
        <input 
          type="text"
          id="color"
          name="color" 
          onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="emsCode">Cód. EMS:</label>
        <input
          type="text"
          id="emsCode"
          name="EmsCode"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="microchip">Microchip:</label>
        <input
          type="text"
          id="microchip"
          name="Microchip"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="colorX">Cor(X):</label>
        <input 
          type="text"
          id="colorX"
          name="colorX" 
          onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="breeding">Breeding:</label>
        <select
          id="breeding"
          name="Breeding"
          onChange={handleSelectChange}
        >
          <option value="">Selecione</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">Nome:</label>
        <input 
          type="text"
          id="name"
          name="Name" 
          onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="sex">Sexo:</label>
        <select
          id="sex"
          name="Sex"
          onChange={handleSelectChange}
        >
          <option value="">Selecione</option>
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>
      </div>
    </div>
  );
}
