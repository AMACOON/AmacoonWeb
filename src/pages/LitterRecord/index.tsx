import LittleRecordForm from "../../components/forms/LittleRecord";
import Title from "../../components/Title";

import { Container } from "./styles";

export default function LitterRecord() {
  return (
    <Container>
      <Title>Registro de ninhada</Title>

      <LittleRecordForm />
    </Container>
  );
}
