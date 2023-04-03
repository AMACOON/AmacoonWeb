import { Dispatch, SetStateAction } from "react";
import useCat from "../../hooks/useCats";

import CatData from "../CatsData";
import ManualCatForm from "../ManualCatForm";
import Select from "../Select";

import Title from "../Title";

type FemaleProps = {
  setDataFemale: Dispatch<SetStateAction<any>>;
};

export default function Female({ setDataFemale }: FemaleProps) {
  const {
    cats,
    selectedCat,
    showManualData,
    handleChangeCheckbox,
    handleSelectedCat,
    handleInputChange,
  } = useCat({
    setDataCat: setDataFemale,
    genre: "F",
  });

  return (
    <div>
      <Title title="Dados da Fêmea" />

      {cats.length > 0 ? (
        <Select
          options={cats.map((cat) => ({
            value: cat.CatID,
            label: cat.Name,
          }))}
          selectedOption={selectedCat}
          handleSelectedOption={() => handleSelectedCat(Number(selectedCat))}
        />
      ) : (
        <p>Nenhuma fêmea cadastrada</p>
      )}

      <div>
        <input
          type="checkbox"
          onChange={handleChangeCheckbox}
          disabled={!!selectedCat}
        />
        <span>Se a Gata Não Estiver na Lista - Homologar e Tranferir</span>
      </div>

      {selectedCat && Object.keys(selectedCat).length > 0 && (
        <CatData cat={selectedCat} subtitle="Dados da Fêmea" />
      )}

      {showManualData && <ManualCatForm onChange={handleInputChange} />}
    </div>
  );
}
