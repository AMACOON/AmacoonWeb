import axios from "axios";

export const api = axios.create({
  baseURL: "http://backend:8080",
});

export const getCats = async (id_exhibitor: number, sex: "M" | "F") => {
  try {
    const response = await api.get("/catsservice", {
      params: {
        id_exhibitor,
        sex,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCatByRegister = async (register: string) => {
  try {
    const response = await api.get(`/catsservice/${register}`);

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