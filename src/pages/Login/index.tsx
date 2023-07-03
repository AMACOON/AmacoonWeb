import Title from "../../components/Title";
import LoginForm from "../../components/forms/Login";

import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <Title>Login</Title>

      <LoginForm />
    </Container>
  );
}
