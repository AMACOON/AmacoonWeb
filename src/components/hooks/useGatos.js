import { useState, useEffect, useCallback } from "react";
import api from "../../api/Api";

const useGatos = (idExpositor, sexo) => {
  const [gatos, setGatos] = useState([]);

  const fetchGatos = useCallback(async () => {
    try {
      const queryParams = {
        id_exhibitor: idExpositor,
        sex: sexo,
      };

      const response = await api.get("/catsservice", {
        params: queryParams,
      });

      console.log(`Gatos do sexo ${sexo} recebidos:`, response.data); // Log dos dados recebidos da API

      setGatos(response.data);
    } catch (error) {
      console.error("Erro ao buscar gatos:", error);
    }
  }, [idExpositor, sexo]);

  useEffect(() => {
    fetchGatos();
  }, [fetchGatos]);

  return { gatos };
};

export default useGatos;
