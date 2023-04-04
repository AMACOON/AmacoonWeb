import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getCountries } from "../services/api";

type Country = {
  countryCode: string;
  countryName: string;
  activate: string;
};

type UseCountriesDataProps = {
  setDataCountry: Dispatch<SetStateAction<Country>>;
};

export default function useCountry({ setDataCountry }: UseCountriesDataProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>(); // entender

  useEffect(() => {
    async function loadCountriesData() {
      const countriesData = await getCountries();
      console.log("Retono Api Countries", countriesData);
      setCountries(countriesData);
    }

    loadCountriesData();
  }, []);

  function handleSelectedCountry(countryCode: string) {
    const selectedPais = countries.find(
      (country) => country.countryCode === String(countryCode)
    );
    console.log("Pais Selecionado: ", selectedPais);
    if (!selectedPais) {
      console.error(
        `Não foi possível encontrar um pais com o Code ${countryCode}`
      );
      return;
    }
    setSelectedCountry(selectedPais);
    setDataCountry(selectedPais);
  }

  /* function handleInputChange(name: string, value: string) {
    setDataCountry((prev: any) => ({ ...prev, [name]: value }));
  } */

  return {
    countries,
    selectedCountry,
    handleSelectedCountry,
  };
}

