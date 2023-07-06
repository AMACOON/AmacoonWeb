// src/components/CatShortInfo/index.tsx

import { Container } from "./styles";
import { Table } from "./styles";
import { CatShort } from "../../@types/cat";

type CatShortInfoProps = {
  cat: CatShort;
  handleDelete: (id: number) => void;
  handleUpdate: (cat: CatShort) => void;
};

export default function CatShortInfo({ cat, handleDelete, handleUpdate }: CatShortInfoProps) {
  return (
    <Container>
     <Table>
        <thead>
          <tr>
            {[
              "ID", 
              "Name",
              "Breed",
              "Color",
              "EmsCode",
              "Actions",
            ].map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cat.ID}</td>
            <td>{cat.Name}</td>
            <td>{cat.Breed}</td>
            <td>{cat.Color}</td>
            <td>{cat.EmsCode}</td>
            <td>
              <button onClick={() => handleUpdate(cat)}>Alterar</button>
              <button onClick={() => handleDelete(cat.ID)}>Excluir</button>
            </td>
          </tr>
        </tbody>
        </Table>
    </Container>
  );
}
