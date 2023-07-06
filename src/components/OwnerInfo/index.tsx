// src/components/OwnerInfo/index.tsx

import { Owner } from "../../@types/owner";
import { Container } from "./styles";

type OwnerInfoProps = {
  owner: Owner;
};

export default function OwnerInfo({ owner }: OwnerInfoProps) {
  return (
    <Container>
      {[
        "Email",
        "Name",
        "CPF",
        "Address",
        "City",
        "State",
        "ZipCode",
        "Phone",
        "Valid",
        "ValidId",
        "Observation"
      ].map((key) => (
        <p key={key}>
          <strong>{key}:</strong> {String(owner[key as keyof Owner])}
        </p>
      ))}
      <p>
        <strong>Country:</strong> {owner.Country.Name}
      </p>
      {owner.Clubs.map((clubDetails, index) => (
        <p key={index}>
          <strong>Club {index + 1}:</strong> {clubDetails.Club.Name}
        </p>
      ))}
    </Container>
  );
}
