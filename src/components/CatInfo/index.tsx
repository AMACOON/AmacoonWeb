import { Container } from "./styles";

type CatInfoProps = {
  cat: any;
};

export default function CatInfo({ cat }: CatInfoProps) {
  return (
    <Container>
      {[
        "name",
        "registration",
        "microchip",
        "breedName",
        "colorName",
        "emsCode",
      ].map((key) => {
        return (
          <p key={key}>
            <strong>{key}:</strong> {cat.catData[key]}
          </p>
        );
      })}
    </Container>
  );
}
