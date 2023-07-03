import Title from "../../components/Title";
import LoginForm from "../../components/forms/Login";

import { Container } from "./styles";

export default function Login() {
  console.log('Login page is rendered');
  return (
    <Container>
      <Title>Login</Title>

      <LoginForm />
    </Container>
  );
}
