import { Dispatch, SetStateAction } from "react";

import useCat from "../../hooks/useCats";

import Title from "../Title";
import NotOwner from "./NotOwner";
import Owner from "./Owner";

type MaleProps = {
  setDataMale: Dispatch<SetStateAction<any>>;
};

export default function Male({ setDataMale }: MaleProps) {
  const {
    cats,
    selectedCat,
    isOwner,
    showManualData,
    handleChangeCheckbox,
    handleSelectedCat,
    handleInputChange,
    handleChangeOwnerType,
    handleSearchCat,
  } = useCat({
    setDataCat: setDataMale,
    genre: "M",
  });

  return (
    <div>
      <Title title="Dados do Macho" />

      <div>
        <input
          type="radio"
          id="owner"
          name="owner"
          value="owner"
          onChange={(event) => handleChangeOwnerType(event.target.value)}
        />
        <label htmlFor="owner">Sou proprietário</label>
      </div>
      <div>
        <input
          type="radio"
          id="notOwner"
          name="owner"
          value="notOwner"
          onChange={(event) => handleChangeOwnerType(event.target.value)}
        />
        <label htmlFor="notOwner">Não sou proprietário</label>
      </div>

      {isOwner === "owner" && (
        <Owner
          cats={cats}
          selectedCat={selectedCat}
          handleSelectedCat={handleSelectedCat}
        />
      )}

      {isOwner === "notOwner" && (
        <NotOwner
          selectedCat={selectedCat}
          handleSearchCat={handleSearchCat}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
}
