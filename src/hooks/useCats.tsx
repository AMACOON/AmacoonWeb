import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getCatByRegister, getCats } from "../services/api";

type useCatDataProps = {
  setDataCat: Dispatch<SetStateAction<any>>;
  genre: "F" | "M";
};

export default function useCat({ setDataCat, genre }: useCatDataProps) {
  const [cats, setCats] = useState<any[]>([]);
  const [selectedCat, setSelectedCat] = useState<any>(null);
  const [showManualData, setShowManualData] = useState(false);
  const [isOwner, setIsOwner] = useState("");

  useEffect(() => {
    async function loadCatsData() {
      const catsData = await getCats(44, genre);
      setCats(catsData);
    }

    loadCatsData();
  }, []);

  function handleSelectedCat(catId: number) {
    const selectedGato = cats.find((cat) => cat.CatID === Number(catId));

    if (!selectedGato) {
      console.error(`Não foi possível encontrar um gato com o CatID ${catId}`);
      return;
    }
    setSelectedCat(selectedGato);
    setDataCat(selectedGato);
    setShowManualData(false);
  }

  async function handleSearchCat(register: string) {
    if (register.length === 6) {
      const selectedGato = await getCatByRegister(register);

      if (!selectedGato) {
        console.error(
          `Não foi possível encontrar um gato com o registro ${register}`
        );
        setSelectedCat(null);
        return;
      }

      setSelectedCat(selectedGato);
    } else {
      setSelectedCat(null);
    }
  }

  function handleChangeOwnerType(isOwner: string) {
    setIsOwner(isOwner);
  }

  function handleChangeCheckbox(event: any) {
    if (!selectedCat) {
      setShowManualData(event.target.checked);
    }
  }

  function handleInputChange(name: string, value: string) {
    setDataCat((prev: any) => ({ ...prev, [name]: value }));
  }

  return {
    cats,
    selectedCat,
    showManualData,
    isOwner,
    handleSelectedCat,
    handleChangeCheckbox,
    handleInputChange,
    handleChangeOwnerType,
    handleSearchCat,
  };
}
