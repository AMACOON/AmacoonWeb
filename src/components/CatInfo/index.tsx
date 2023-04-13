import { Container } from "./styles";

type CatInfoProps = {
  cat: any;
};

export default function CatInfo({ cat }: CatInfoProps) {
  return (
    <Container>
      {[
        "Name",
        "Registration",
        "Microchip",
        "BreedName",
        "ColorName",
        "OwnerName",
      ].map((key) => {
        return (
          <p key={key}>
            <strong>{key}:</strong> {cat[key]}
          </p>
        );
      })}
    </Container>
  );
}
