import axios from "axios";
import { LoginResponse } from '../@types/login';
import {CatShort} from '../@types/cat';

// Obtém a baseURL a partir da variável de ambiente
//const baseURL = import.meta.env.API_BASE_URL;
const baseURL = "https://amacoonservices-production-d438.up.railway.app/api";
// Verifica se a variável de ambiente está definida
if (!baseURL) {
  throw new Error("A variável de ambiente API_BASE_URL não está definida.");
}

export const api = axios.create({
  baseURL: baseURL,
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

export async function login(email: string, password: string): Promise<LoginResponse> {
  try {
    const response = await api.post("/login/authenticate", {
      email,
      password,
    });

    if (response.status !== 200) {
      throw new Error('Login failed');
    }

    const data: LoginResponse = response.data;

    // Here you can use the user data and token as needed,
    // for example, saving it to local storage or state for later use
    // localStorage.setItem('user', JSON.stringify(data.Owner));
    // localStorage.setItem('token', data.Token);

    return data; // Returns the response data as 'LoginResponse'
  } catch (error) {
    console.error(error);
    throw error; // Throws the error to be caught in the calling function
  }
}


export const getOwner = async (ownerId: number) => {
  try {
    const response = await api.get(`/owners/${ownerId}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCatShort = async (ownerId: number) => {
  try {
    const response = await api.get(`/cats/${ownerId}/owner`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// api.ts

export async function deleteCat(id: number) {
  // Simula um delay da rede
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Retorna uma Promise que resolve para um status 200
  return Promise.resolve({ status: 200 });
}

export async function updateCat(cat: CatShort) {
  // Simula um delay da rede
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Retorna uma Promise que resolve para um status 200
  return Promise.resolve({ status: 200 });
}

