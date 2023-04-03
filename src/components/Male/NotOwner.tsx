import { useState } from "react";
import CatData from "../CatsData";
import ManualCatForm from "../ManualCatForm";

import Select from "../Select";

type NotOwnerProps = {
  selectedCat: any;
  handleInputChange: (name: string, value: string) => void;
  handleSearchCat: (register: string) => void;
};

export default function NotOwner({
  selectedCat,
  handleInputChange,
  handleSearchCat,
}: NotOwnerProps) {
  const [selectedOption, setSelectedOption] = useState("");

  function handleSelectedOption(option: string) {
    setSelectedOption(option);
  }

  console.log(selectedCat);

  return (
    <>
      <Select
        options={[
          {
            label: "Usar sistema",
            value: "system",
          },
          {
            label: "Preencher manualmente",
            value: "manual",
          },
        ]}
        selectedOption={selectedOption}
        handleSelectedOption={handleSelectedOption}
      />

      {selectedOption === "system" && (
        <div>
          <input
            type="text"
            placeholder="Digite o registro do gato"
            onChange={(event) => handleSearchCat(event.target.value)}
          />
        </div>
      )}

      {selectedOption === "system" && selectedCat && (
        <CatData cat={selectedCat} subtitle="Gato buscado" />
      )}

      {selectedOption === "manual" && (
        <ManualCatForm onChange={handleInputChange} />
      )}
    </>
  );
}
