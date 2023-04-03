import Subtitle from "../Subtitle";

type CatDataProps = {
  cat: any;
  subtitle: string;
};

export default function CatData({ cat, subtitle }: CatDataProps) {
  return (
    <div>
      <Subtitle subtitle={subtitle} />
      <p>Nome: {cat.Name}</p>
      <p>Registro: {cat.Registration}</p>
      <p>Microchip: {cat.Microchip}</p>
      <p>Raça: {cat.BreedName}</p>
      <p>Cor: {cat.ColorName}</p>
      {/* <p>EmsCode: {cat.EmsCode}</p>
          <p>Sexo: {cat.Sex === "1" ? "Masculino" : "Feminino"}</p>
          <p>Data de Nascimento: {cat.Birthdate}</p>
          <p>Nome do Pai: {cat.FatherName}</p>
          <p>Nome da Mãe: {cat.MotherName}</p>
          <p>Nome do Criador: {cat.BreederName}</p> */}
      <p>Proprietário: {cat.OwnerName}</p>
      {/* <p>Endereço: {cat.Address}</p>
          <p>Código Postal: {cat.ZipCode}</p>
          <p>Cidade: {cat.City}</p>
          <p>Estado: {cat.State}</p>
          <p>Telefone: {cat.Phone}</p> */}
    </div>
  );
}
