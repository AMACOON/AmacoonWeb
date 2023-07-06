// src/pages/Owner/index.tsx

import Title from "../../components/Title";
import OwnerForm from "../../components/forms/Owner";
import { useParams } from 'react-router-dom';

import { Container } from "./styles";

export default function Owner() {
  const { userId } = useParams<{ userId: string }>();

  return (
    <Container>
      <Title>Owner</Title>
      <OwnerForm ownerId={Number(userId)} />
    </Container>
  );
}
