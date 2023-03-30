const DadosGato = ({ gato = {}, title, onInputChange }) => {
  console.log("Dados do gato:", gato); // Adicionar aqui
  return (
    <div>
      <h3>{title}</h3>
      {Object.keys(gato).length === 0 ? (
        <p>Nenhum gato selecionado</p>
      ) : (
        <div>
          <p>Nome: {gato.Name}</p>
          <p>Registro: {gato.Registration}</p>
          <p>Microchip: {gato.Microchip}</p>
          <p>Raça: {gato.BreedName}</p>
          <p>Cor: {gato.ColorName}</p>
          {/* <p>EmsCode: {gato.EmsCode}</p>
          <p>Sexo: {gato.Sex === "1" ? "Masculino" : "Feminino"}</p>
          <p>Data de Nascimento: {gato.Birthdate}</p>
          <p>Nome do Pai: {gato.FatherName}</p>
          <p>Nome da Mãe: {gato.MotherName}</p>
          <p>Nome do Criador: {gato.BreederName}</p> */}
          <p>Proprietário: {gato.OwnerName}</p>
          {/* <p>Endereço: {gato.Address}</p>
          <p>Código Postal: {gato.ZipCode}</p>
          <p>Cidade: {gato.City}</p>
          <p>Estado: {gato.State}</p>
          <p>Telefone: {gato.Phone}</p> */}
        </div>
      )}
    </div>
  );
};

export default DadosGato;
