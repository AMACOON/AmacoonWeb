// src/components/forms/OwnerForm/index.tsx

import useOwnerForm from './viewModel';
import FormSection from "../../FormSection";
import { Container } from "./styles"; 
import OwnerInfo from '../../OwnerInfo';  

type OwnerFormProps = {
  ownerId: number;
};

export default function OwnerForm({ ownerId }: OwnerFormProps) {
  const { error, ownerData } = useOwnerForm(ownerId);

  return (
    <Container>
      <FormSection label="Owner Data">
        {error && <p>{error}</p>}
        {!ownerData && <p>Loading...</p>}
        {ownerData && <OwnerInfo owner={ownerData} />}
      </FormSection>
    </Container>
  );
}
