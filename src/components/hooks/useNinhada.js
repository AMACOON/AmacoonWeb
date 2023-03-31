// hooks/useNinhada.js
import { useState } from "react";

const useNinhada = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitNinhada = async (ninhadaData) => {
    setIsSubmitting(true);
    try {
      console.log(ninhadaData.dadosFemea)
      console.log(ninhadaData.dadosMacho)
      console.log(ninhadaData.dadosNascimento)
      console.log(ninhadaData.dadosFilhotes)
      // Realize a chamada para a API aqui com os dados da ninhada.
      // Por exemplo:
      // const response = await api.post('/ninhada', ninhadaData);

      // Após a chamada ser concluída, você pode atualizar o estado, como:
      setIsSubmitting(false);
    } catch (error) {
      // Trate os erros aqui, como:
      console.error("Erro ao enviar ninhada:", error);
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, submitNinhada };
};

export default useNinhada;
/* const response = await api.post('/ninhada', {
        motherData: ninhadaData.dadosFemea,
        fatherData: ninhadaData.dadosMacho,
        birthData: ninhadaData.dadosNascimento,
        kittenData: ninhadaData.dadosFilhotes,
      }); */