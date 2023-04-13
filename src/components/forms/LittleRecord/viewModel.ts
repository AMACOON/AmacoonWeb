import { useEffect, useState } from "react";

import { getCatByRegister, getCats } from "../../../services/api";

import useErrors from "../../../hooks/useErrors";

import { Cat, ManualCat } from "../../../@types/cat";

export default function useLittleRecordForm() {
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
        getCats(44, "M"),
        getCats(44, "F"),
      ]);

      setMales(males);
      setFemales(females);
    }

    loadCats();
  }, []);

  function handleChangeCat(name: string, sex: "M" | "F") {
    const cat =
      sex === "M"
        ? males.find((male) => male.Name === name)
        : females.find((female) => female.Name === name);

    if (!cat) {
      setError({
        field: sex === "M" ? "male" : "female",
        message: "Fêmea é obrigatória",
      });
      sex === "M" ? setMale(undefined) : setFemale(undefined);
    } else {
      removeError(sex === "M" ? "male" : "female");
      sex === "M" ? setMale(cat) : setFemale(cat);
    }
  }

  function handleChangeTypeOwnerMale(type: string) {
    setMale(undefined);
    removeError("male");
    setTypeOwnerMale(type);
  }

  async function handleCatByRegister(register: string, sex: "M" | "F") {
    setMaleCatRegistration(register);

    if (register.length === 6) {
      const cat = await getCatByRegister(register);

      if (cat.CatID === 0) {
        setError({
          field: sex === "M" ? "male" : "female",
          message: "Gato não encontrado",
        });
        sex === "M" ? setMale(undefined) : setFemale(undefined);
      } else {
        removeError(sex === "M" ? "male" : "female");

        sex === "M" ? setMale(cat) : setFemale(cat);
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
