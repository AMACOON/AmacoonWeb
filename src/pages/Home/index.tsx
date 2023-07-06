// src/pages/Home/index.tsx

import Card from "../../components/Card";
import Title from "../../components/Title";
import { useLocation } from 'react-router-dom';
import { LoginResponse } from '../../@types/login';

import { Container, Cards } from "./styles";

export default function Home() {
  const location = useLocation();
  const loginData: LoginResponse = location.state.loginData;
  const user = loginData.Owner;
  const token = loginData.Token;
  const isAssociated = loginData.IsAssociate;

   // Log the value of isAssociated to the console
   console.log('isAssociated:', isAssociated);
   console.log('token:', token);
   console.log('user:', user);

  const services = [
    {
      title: "Meu Cadastro",
      services: [
        { 
          label: "Ver Informacoes", 
          url: `/owner/${user.ID}`
        },
      ],
      show: true,
    },
    {
      title: "Meus Gatos",
      services: [
        { label: "Novo Gato", url: "/registro-gato" },
        { label: "Lista de Gatos", url: `/listagem-gato/${user.ID}` },
      ],
      show: true,
    },
    {
      title: "Serviços",
      services: [
        { label: "Lista de Servicos", url: `/services/${user.ID}` },
        
      ],
      // Hide this service if the user is not associated
      show: isAssociated,
    },
  ];
  
  return (
    <Container>
      <Title>Home</Title>

      <Cards>
        {services.filter(service => service.show !== false).map((service) => (
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
