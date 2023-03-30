import { useState, useEffect } from "react";
import api from "../../api/Api";

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const fetchCountries = async () => {
      try {
        const response = await api.get("/countries");
        setCountries(response.data);
      } catch (error) {
        console.error("Erro ao buscar países:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, isLoading, isError };
};

export default useCountries;
