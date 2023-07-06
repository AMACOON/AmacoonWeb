// src/components/forms/CatShortForm/index.tsx

import FormSection from "../../FormSection";
import { Container } from "./styles"; 
import CatShortInfo from '../../CatShortInfo';  
import useCatShortForm from './viewModel';

type OwnerFormProps = {
  ownerId: number;
};


export default function CatShortForm({ ownerId }: OwnerFormProps) {
 
  const { error, catShortData, handleDelete, handleUpdate } = useCatShortForm(ownerId);

  return (
    <Container>
      <FormSection label="Cat Data">
        {error && <p>{error}</p>}
        {!catShortData && <p>Loading...</p>}
        {catShortData && catShortData.map((cat, index) => (
          <CatShortInfo
            key={index}
            cat={cat}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </FormSection>
    </Container>
  );
}

