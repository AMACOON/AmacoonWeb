import { ChangeEvent } from "react";

type ManualCatFormProps = {
  onChange: (name: string, value: string) => void;
};

export default function ManualCatForm({ onChange }: ManualCatFormProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [name, value] = [event.target.name, event.target.value];
    onChange(name, value);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Nome:</label>
        <input 
          type="text"
          id="name"
          name="Name" 
          onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="registration">Registro:</label>
        <input
          type="text"
          id="registration"
          name="Registration"
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
        <label htmlFor="breedName">Raça:</label>
        <input
          type="text"
          id="breedName"
          name="BreedName"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="colorName">Cor:</label>
        <input
          type="text"
          id="colorName"
          name="ColorName"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="emsCode">EmsCode:</label>
        <input
          type="text"
          id="emsCode"
          name="EmsCode"
          onChange={handleInputChange}
        />
      </div>

      {/*  <label htmlFor="birthdate">Data de Nascimento:</label>
      <input type="text" id="birthdate" name="Birthdate" onChange={handleInputChange} />

      <label htmlFor="fatherName">Nome do Pai:</label>
      <input type="text" id="fatherName" name="FatherName" onChange={handleInputChange} />

      <label htmlFor="motherName">Nome da Mãe:</label>
      <input type="text" id="motherName" name="MotherName" onChange={handleInputChange} />

      <label htmlFor="breederName">Nome do Criador:</label>
      <input type="text" id="breederName" name="BreederName" onChange={handleInputChange} />

 */}
      <div>
        <label htmlFor="ownerName">Proprietário:</label>
        <input
          type="text"
          id="ownerName"
          name="OwnerName"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="address">Endereço:</label>
        <input
          type="text"
          id="address"
          name="Address"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="zipCode">Código Postal:</label>
        <input
          type="text"
          id="zipCode"
          name="ZipCode"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="city">Cidade:</label>
        <input type="text" id="city" name="City" onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="state">Estado:</label>
        <input
          type="text"
          id="state"
          name="State"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone:</label>
        <input
          type="text"
          id="phone"
          name="Phone"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
