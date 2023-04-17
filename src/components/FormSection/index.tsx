import { Container } from "./styles";

type FormSectionProps = {
  label: string;
  children: React.ReactNode;
};

export default function FormSection({ label, children }: FormSectionProps) {
  return (
    <Container>
      <h2>{label}</h2>

      {children}
    </Container>
  );
}
