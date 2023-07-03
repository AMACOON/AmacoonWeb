// src/components/forms/Login/viewModel.ts
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../../../services/api"; 

export default function useLoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Implemente a lógica de autenticação aqui
    try {
      await login(email, password); 
      // Se a autenticação for bem-sucedida, redirecione para Home
      navigate('/home');
    } catch (err) {
      // Trate o erro como achar melhor
      setError('Login failed. Please try again.')
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin
  };
}
