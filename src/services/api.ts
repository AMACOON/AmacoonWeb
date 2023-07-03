import axios from "axios";

export const api = axios.create({
  baseURL: "https://amacoon.fq8n18ftegddi.us-east-1.cs.amazonlightsail.com",
});

export const getCats = async (ownerId: number, gender: "male" | "female") => {
  try {
    const response = await api.get("/catservice", {
      params: {
        ownerId,
        gender,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCatByRegister = async (registration: string) => {
  try {
    const response = await api.get(`/catservice/${registration}/registration`);

    return response.data; // Receber 1 e nao array
  } catch (error) {
    console.error(error);
  }
};

export const getCountries = async () => {
  try {
    const response = await api.get("/countries", {
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/login/authenticate", {
      email,
      password,
    });

    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error(error);
    throw error; // Lança o erro para ser capturado na função de chamada
  }
};
