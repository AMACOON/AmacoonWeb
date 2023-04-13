import Card from "../../components/Card";
import Title from "../../components/Title";

import { Container, Cards } from "./styles";

export default function Home() {
  const services = [
    {
      title: "Gatil",
      services: [
        { label: "Registro", url: "/registro-gatil" },
        { label: "Listagem", url: "/listagem-gatil" },
      ],
    },
    {
      title: "Ninhada",
      services: [
        { label: "Registro", url: "/registro-ninhada" },
        { label: "Listagem", url: "/listagem-ninhada" },
      ],
    },
    {
      title: "Transferência de Propriedade",
      services: [{ label: "Registro", url: "/registro-transferencia" }],
    },
    {
      title: "Pedigree",
      services: [
        { label: "Registro", url: "/registro-pedigree" },
        { label: "Listagem", url: "/listagem-pedigree" },
      ],
    },
    {
      title: "Títulos",
      services: [
        { label: "Registro", url: "/registro-titulo" },
        { label: "Listagem", url: "/listagem-titulo" },
      ],
    },
    {
      title: "Segunda via e Alterações",
      services: [{ label: "Registro", url: "/registro-exposicao" }],
    },
    {
      title: "Renovação",
      services: [{ label: "Registro", url: "/registro-renovacao" }],
    },
    {
      title: "Mudança de Cor",
      services: [{ label: "Registro", url: "/registro-mudanca-cor" }],
    },
    {
      title: "Retificação de Serviço",
      services: [{ label: "Registro", url: "/registro-retificacao-servico" }],
    },
  ];

  return (
    <Container>
      <Title>Serviços</Title>

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
