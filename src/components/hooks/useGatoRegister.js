import { useState, useCallback } from "react";
import api from "../../api/Api";

const useGatoRegister = () => {
  const [gato, setGato] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Adicione esta linha
  const [isError, setIsError] = useState(false); // Adicione esta linha

  const fetchGato = useCallback(async (registro) => {
    if (!registro) return;

    setIsLoading(true); // Adicione esta linha
    setIsError(false); // Adicione esta linha

    try {
      const response = await api.get(`/catsservice/${registro}`);

      console.log(`Gato com registro ${registro} recebido:`, response.data);
      setGato(response.data);
    } catch (error) {
      console.error("Erro ao buscar gato:", error);
      setIsError(true); // Adicione esta linha
    } finally {
      setIsLoading(false); // Adicione esta linha
    }
  }, []);

  const searchGatoByRegistro = (registro) => {
    fetchGato(registro);
  };

  return { gato, isLoading, isError, searchGatoByRegistro }; // Adicione isLoading e isError
};

export default useGatoRegister;
