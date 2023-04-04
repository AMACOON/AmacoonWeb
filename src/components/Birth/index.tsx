import { ChangeEvent, useEffect, useState } from "react";
import Title from "../Title";

type BirthProps = {
  onChange: (name: string, value: string) => void;
};



export default function Birth({ onChange }: BirthProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [name, value] = [event.target.name, event.target.value];
    onChange(name, value);
  };

  return (
    <div>
      <Title title="Dados de Nascimento" />

      <div>
        <label htmlFor="country">País:</label>
        <input
          type="text"
          id="country"
          name="Country"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="birthdate">Data de Nascimento:</label>
        <input
          type="text"
          id="birthdate"
          name="Birthdate"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="numberOfKittens">Número de Filhotes:</label>
        <input
          type="text"
          id="numberOfKittens"
          name="NumberOfKittens"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="catteryName">Nome do Gatil:</label>
        <input
          type="text"
          id="catteryName"
          name="CatteryName"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
