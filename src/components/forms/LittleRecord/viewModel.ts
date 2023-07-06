import { useEffect, useState } from "react";

import { getCatByRegister, getCats } from "../../../services/api";

import useErrors from "../../../hooks/useErrors";

import { Cat, ManualCat } from "../../../@types/cat";

export default function useLittleRecordForm(userId: number) {
  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  const [males, setMales] = useState<Cat[]>([]);
  const [females, setFemales] = useState<Cat[]>([]);

  const [male, setMale] = useState<Cat>();
  const [female, setFemale] = useState<Cat>();
  const [manualMale, setManualMale] = useState<ManualCat>();

  const [typeOwnerMale, setTypeOwnerMale] = useState<string>("");
  const [maleCatRegistration, setMaleCatRegistration] = useState<string>("");

  useEffect(() => {
    async function loadCats() {
      const [males, females] = await Promise.all([
        getCats(userId, "male"),
        getCats(userId, "female"),
      ]);

      setMales(males);
      setFemales(females);
    }

    loadCats();
  }, []);

  function handleChangeCat(name: string, gender: "male" | "female") {
    const cat =
      gender === "male"
        ? males.find((male) => male.catData.name === name)
        : females.find((female) => female.catData.name === name);
  
    if (!cat) {
      setError({
        field: gender === "male" ? "male" : "female",
        message: "Fêmea é obrigatória",
      });
      gender === "male" ? setMale(undefined) : setFemale(undefined);
    } else {
      removeError(gender === "male" ? "male" : "female");
      gender === "male" ? setMale(cat) : setFemale(cat);
    }
  }
  

  function handleChangeTypeOwnerMale(type: string) {
    setMale(undefined);
    removeError("male");
    setTypeOwnerMale(type);
  }

  async function handleCatByRegister(register: string, gender: "male" | "female") {
    setMaleCatRegistration(register);
  
    if (register.length === 6) {
      const cat = await getCatByRegister(register);
  
      if (cat.CatID === 0) {
        setError({
          field: gender === "male" ? "male" : "female",
          message: "Gato não encontrado",
        });
        gender === "male" ? setMale(undefined) : setFemale(undefined);
      } else {
        removeError(gender === "male" ? "male" : "female");
  
        gender === "male" ? setMale(cat) : setFemale(cat);
      }
    }
  }
  

  function handleChangeManualCat(key: string, value: string) {
    setManualMale((prev: any) => ({ ...prev, [key]: value }));

    if (!value) {
      setError({
        field: `manualMale.${key}`,
        message: "Campo obrigatório",
      });
    } else {
      removeError(`manualMale.${key}`);
    }
  }

  return {
    males,
    females,
    male,
    female,
    typeOwnerMale,
    maleCatRegistration,
    handleChangeCat,
    handleChangeTypeOwnerMale,
    handleCatByRegister,
    manualMale,
    handleChangeManualCat,
    errors,
    getErrorMessageByFieldName,
  };
}
