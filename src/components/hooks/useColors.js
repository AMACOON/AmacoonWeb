import { useState, useEffect } from "react";
import api from "../../api/Api";

const useColors = (breedId) => {
  const [colors, setColors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchColors = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await api.get(`/colors?breedID=${breedId}`);
        setColors(response.data);
      } catch (error) {
        console.error("Erro ao buscar cores:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (breedId) {
      fetchColors();
    }
  }, [breedId]);

  return { colors, isLoading, isError };
};

export default useColors;
