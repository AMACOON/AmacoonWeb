import { useParams } from "react-router-dom";
import CatShortForm from "../../components/forms/CatShort";
import Title from "../../components/Title";

import { Container } from "./styles";

interface CatShortParams {
  userId: string;
}

export default function CatShort() {
  const { userId } = useParams<{ userId: string }>();
  
  return (
    <Container>
      <Title>Lista de Gatos</Title>

      <CatShortForm ownerId={Number(userId)} />
    </Container>
  );
}
