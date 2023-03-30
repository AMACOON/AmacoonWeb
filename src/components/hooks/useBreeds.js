import { useState, useEffect } from "react";
import api from "../../api/Api";

const useBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const fetchBreeds = async () => {
      try {
        const response = await api.get("/breeds");
        setBreeds(response.data);
      } catch (error) {
        console.error("Erro ao buscar raças:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  return { breeds, isLoading, isError };
};

export default useBreeds;
