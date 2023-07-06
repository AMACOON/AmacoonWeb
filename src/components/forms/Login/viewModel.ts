// src/components/forms/Login/viewModel.ts
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../../../services/api"; 
import { LoginResponse } from '../../../@types/login';


export default function useLoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const loginData: LoginResponse = await login(email, password);
      // If authentication is successful, redirect to Home
      navigate('/home', { state: { loginData } });

    } catch (err) {
      // Handle error as you see fit
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
