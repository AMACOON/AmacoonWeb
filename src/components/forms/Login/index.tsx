// src/components/forms/Login/index.tsx

import useLoginForm from './viewModel';

import FormSection from "../../FormSection";
import { Container } from "./styles";

export default function LoginForm() {
  const { email, setEmail, password, setPassword, error, handleLogin } = useLoginForm();

  return (
    <div>
      <form onSubmit={handleLogin}>
        <FormSection label="Email">
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required
          />
        </FormSection>
  
        <FormSection label="Password">
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required
          />
        </FormSection>
  
        {error && <p>{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
  
}
