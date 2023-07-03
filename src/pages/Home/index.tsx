import Card from "../../components/Card";
import Title from "../../components/Title";

import { Container, Cards } from "./styles";

export default function Home() {
  const services = [
    {
      title: "Meu Cadastro",
      services: [
        { label: "Cadastro", url: "/owner" },
        
      ],
    },
    {
      title: "Meus Gatos",
      services: [
        { label: "Registro", url: "/registro-gato" },
        { label: "Listagem", url: "/listagem-gato" },
      ],
    }
  ];

  return (
    <Container>
      <Title>Home</Title>

      <Cards>
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            services={service.services}
          />
        ))}
      </Cards>
    </Container>
  );
}
