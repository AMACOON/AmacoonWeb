import { Container } from "./styles";

type FormGroupProps = {
  children: React.ReactNode;
  error?: string;
};

export default function FormGroup({ children, error }: FormGroupProps) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}
